package com.fosun.fin.data.util.http;

import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;
import org.apache.http.impl.nio.conn.PoolingNHttpClientConnectionManager;
import org.apache.http.impl.nio.reactor.DefaultConnectingIOReactor;
import org.apache.http.impl.nio.reactor.IOReactorConfig;
import org.apache.http.message.BasicHeader;
import org.apache.http.nio.conn.NoopIOSessionStrategy;
import org.apache.http.nio.conn.SchemeIOSessionStrategy;
import org.apache.http.nio.conn.ssl.SSLIOSessionStrategy;
import org.apache.http.nio.reactor.ConnectingIOReactor;
import org.apache.http.nio.reactor.IOReactorException;
import org.apache.http.ssl.SSLContexts;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.sniff.ElasticsearchHostsSniffer;
import org.elasticsearch.client.sniff.HostsSniffer;
import org.elasticsearch.client.sniff.Sniffer;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;

/**
 *
 * Created by Samchu Li on 2017/5/2.
 */
@Configuration
@PropertySource("classpath:application.properties")
public class HttpClient {

    @Value("${spring.httpClient.maxTotal}")
    private int maxTotal;

    @Value("${spring.httpClient.defaultMaxPreRoute}")
    private int defaultMaxPerRoute;

    @Value("${spring.httpClient.connectTimeout}")
    private int connectTimeout;

    @Value("${spring.httpClient.connectionRequestTimeout}")
    private int connectionRequestTimeout;

    @Value("${spring.httpClient.scoketTimeout}")
    private int socketTimeout;

    @Value("${spring.httpClient.staleConnectionCheckEnable}")
    private boolean staleConnectionCheckEnabled;

    @Value("${spring.elasticsearch.keyStorePath}")
    private String keyStorePath;

    @Value("${spring.elasticsearch.keyStorepass}")
    private String keyStorepass;

    @Value("${spring.elasticsearch.httpsusername}")
    private String httpsusaername;

    @Value("${spring.elasticsearch.httpspassword}")
    private String httppassword;

    @Value("${spring.elasticsearch.host}")
    private String eshost;

    @Value("${spring.elasticsearch.port}")
    private int esport;

    @Value("${spring.elasticsearch.schema}")
    private String esschema;


    /**
     * 设置信任自签名证书
     * keyStorePath 秘钥库路径
     * keyStorepass 秘钥密码
     * @return
     */

    @Bean(name ="sslContext")
    public SSLContext getSSLContext(){

        SSLContext sc =null;
        FileInputStream instream = null;
        KeyStore trustStore = null;


        try {
            trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
            System.out.println("============================");
            System.out.println(new File(keyStorePath).getAbsolutePath().toString());
            instream = new FileInputStream(new File(keyStorePath));
            trustStore.load(instream, keyStorepass.toCharArray());

            // 相信自己的CA和所有自签名的证书
            sc = SSLContexts.custom().loadTrustMaterial(trustStore, new TrustSelfSignedStrategy()).build();
        } catch (KeyStoreException | IOException | CertificateException | NoSuchAlgorithmException | KeyManagementException e) {
            e.printStackTrace();
        }  finally {
            try {
                instream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return sc;
    }


    @Bean(name ="credsProvider")
    public CredentialsProvider getCredentialsProvider(){
        CredentialsProvider credsProvider = new BasicCredentialsProvider();
        credsProvider.setCredentials(
                AuthScope.ANY,
                new UsernamePasswordCredentials("admin", "admin"));

        return credsProvider;
    }


    /**
     * 实例化一个https的连接池管理器，设置最大连接数和并发连接数
     * @param sslContext
     * @return
     */
    @Bean(name ="httpsClientConnectionManager")
    public PoolingNHttpClientConnectionManager getHttpsClientConnectionManager(@Qualifier("sslContext") SSLContext sslContext) throws IOReactorException {

        SSLIOSessionStrategy s = new SSLIOSessionStrategy(sslContext, SSLConnectionSocketFactory.getDefaultHostnameVerifier());
        RegistryBuilder<SchemeIOSessionStrategy> rb = RegistryBuilder.create();
        rb.register("https", s).register("http", NoopIOSessionStrategy.INSTANCE);

        //ConnectingIOReactor ioReactor = new DefaultConnectingIOReactor();
        PoolingNHttpClientConnectionManager httpsClientConnectionManager = new PoolingNHttpClientConnectionManager(new DefaultConnectingIOReactor(IOReactorConfig.DEFAULT),rb.build());
        return httpsClientConnectionManager;

    }


    @Bean(name = "httpsClientBuilder")
    public HttpAsyncClientBuilder getHttpsClientBuilder(@Qualifier("httpsClientConnectionManager") PoolingNHttpClientConnectionManager httpsClientConnectionManager, @Qualifier("sslContext") SSLContext sslContext,@Qualifier("credsProvider") CredentialsProvider credsProvider){

        HttpAsyncClientBuilder httpsClientBuilder = HttpAsyncClientBuilder.create();
        httpsClientBuilder.setConnectionManager(httpsClientConnectionManager)
                .setSSLContext(sslContext)
                .setDefaultCredentialsProvider(credsProvider).build();

        return httpsClientBuilder;

    }

    @Bean(name = "restClient")
    public RestClient getRestClient() {
        Header[] headers = { new BasicHeader(HttpHeaders.CONTENT_TYPE, "application/json")};
        RestClient restClient = RestClient.builder(new HttpHost(eshost,esport,esschema))
                .setMaxRetryTimeoutMillis(10000)
                .setDefaultHeaders(headers)
                .setHttpClientConfigCallback(new RestClientBuilder.HttpClientConfigCallback(){
                    @Override
                    public HttpAsyncClientBuilder customizeHttpClient( @Qualifier("httpsClientBuilder")  HttpAsyncClientBuilder httpsClientBuilder) {
                            return httpsClientBuilder;
                    }
                }).build();
        return restClient;

    }

    /*@Bean(name ="sinffer")
    public Sniffer getSinffer(@Qualifier("restClient") RestClient restClient){
        HostsSniffer hostsSniffer = new ElasticsearchHostsSniffer(restClient,
                ElasticsearchHostsSniffer.DEFAULT_SNIFF_REQUEST_TIMEOUT,
                ElasticsearchHostsSniffer.Scheme.HTTPS);
        Sniffer sniffer = Sniffer.builder(restClient)
                .setHostsSniffer(hostsSniffer).build();
        return sniffer;
    } */







    /**
     * 实现实例化一个连接池管理器，设置最大连接数和并发连接数
     * @return
     */
    @Bean(name = "httpClientConnectionManager")
    public PoolingHttpClientConnectionManager getHttpClientConnectionManager(){
        PoolingHttpClientConnectionManager httpClientConnectionManager = new PoolingHttpClientConnectionManager();
        httpClientConnectionManager.setMaxTotal(maxTotal);
        httpClientConnectionManager.setDefaultMaxPerRoute(defaultMaxPerRoute);
        return httpClientConnectionManager;
    }

    /**
     * 实例化连接池，设置连接池管理器
     * 这里需要以参数形式注入上面的实例化的连接池管理器
     * @param httpClientConnectionManager
     * @return
     */
    @Bean(name = "httpClientBuilder")
    public HttpClientBuilder getHttpClientBuilder(@Qualifier("httpClientConnectionManager") PoolingHttpClientConnectionManager httpClientConnectionManager){
        //HttpClientBuilder中的构造方法被protected修饰，所以这里不能直接使用new来实例化一个HttpClientBuilder，可以使用HttpClientBuilder提供的静态方法create()来获取HttpClientBuilder对象
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();

        httpClientBuilder.setConnectionManager(httpClientConnectionManager);

        return httpClientBuilder;
    }


    /**
     * 注入连接池，用于获取httpClient
     * @param httpClientBuilder
     * @return
     */
    @Bean
    public CloseableHttpClient getCloseableHttpClient(@Qualifier("httpClientBuilder") HttpClientBuilder httpClientBuilder){
        return httpClientBuilder.build();
    }

    /**
     * Builder是RequestConfig的一个内部类
     * 通过RequestConfig的custom方法来获取到一个Builder对象
     * 设置builder的连接信息
     * 这里还可以设置proxy，cookieSpec等属性。有需要的话可以在此设置
     * @return
     */
    @Bean(name = "builder")
    public RequestConfig.Builder getBuilder(){
        RequestConfig.Builder builder = RequestConfig.custom();
        return builder.setConnectTimeout(connectTimeout)
                .setConnectionRequestTimeout(connectionRequestTimeout)
                .setSocketTimeout(socketTimeout)
                .setStaleConnectionCheckEnabled(staleConnectionCheckEnabled);
    }

    /**
     * 使用builder构建一个RequestConfig对象
     * @param builder
     * @return
     */
    @Bean
    public RequestConfig getRequestConfig(@Qualifier("builder") RequestConfig.Builder builder){
        return builder.build();
    }



}
