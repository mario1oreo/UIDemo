package com.fosun.fin.data.service.impl;

import com.fosun.fin.data.service.IESRestService;
import com.fosun.fin.data.util.http.HttpClient;
import org.apache.http.HttpEntity;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.ResponseListener;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.sniff.Sniffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Collections;

/**
 * Created by Administrator on 2017/5/3.
 */
@Service
public class ESRestServiceImpl implements IESRestService {

   @Autowired
   private HttpClient httpClient;


    @Override
    public boolean putSync(String index, String type, String id, HttpEntity entity) throws IOException {
        Response response = null;
        RestClient restClient = httpClient.getRestClient();


        try{
            response = restClient.performRequest("PUT",
                    "/"+index+"/"+type+"/"+id,
                    Collections.<String, String>emptyMap(),
                    entity
                );
        } catch (IOException e){
            e.printStackTrace();
        }

        restClient.close();



        return (response != null);
    }




    @Override
    public void putAsync(String index, String type, String id, HttpEntity entity) throws IOException {

        RestClient restClient = httpClient.getRestClient();
        restClient.performRequestAsync(
                "PUT",
                "/" + index + "/" + type + "/" + id,
                Collections.<String, String>emptyMap(),
                entity,
                new ResponseListener() {
                    @Override
                    public void onSuccess(Response response) {
                        System.out.println(response);
                    }

                    @Override
                    public void onFailure(Exception e) {

                        System.out.println("异步同步失败");

                    }
                }
        );

        restClient.close();


    }

    @Override
    public Response getAsync(String index, String type, String id, HttpEntity entity) {
        return null;
    }

    @Override
    public Response getSync(String index, String type, String id, HttpEntity entity) {
        return null;
    }

    @Override
    public boolean delSync(String index, String type, String id, HttpEntity entity) {
        return false;
    }

    @Override
    public boolean delAsync(String index, String type, String id, HttpEntity entity) {
        return false;
    }
}
