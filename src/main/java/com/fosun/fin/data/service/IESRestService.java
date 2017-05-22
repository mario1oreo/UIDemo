package com.fosun.fin.data.service;

import org.apache.http.HttpEntity;
import org.elasticsearch.client.Response;

import java.io.IOException;

/**
 * Created by Samchu Li on 2017/5/3.
 */
public interface IESRestService {



    /**
     * 同步方式向ES集群创建文档
     * @param index
     * @param type
     * @param id
     * @param entity
     * @return
     */
    public boolean putSync(String index, String type, String id, HttpEntity entity) throws IOException;


    /**
     * 异步方式向ES集群创建文档
     * @param index
     * @param type
     * @param id
     * @param entity
     */
    public void putAsync(String index, String type, String id, HttpEntity entity) throws IOException;

    /**
     * 异步方式取得数据
     * @param index
     * @param type
     * @param id
     * @param entity
     * @return
     */
    public Response getAsync(String index, String type, String id, HttpEntity entity);


    /**
     * 同步方式取得数据
     * @param index
     * @param type
     * @param id
     * @param entity
     * @return
     */
    public Response getSync(String index, String type, String id, HttpEntity entity);



    public boolean delSync(String index, String type, String id, HttpEntity entity);

    public boolean delAsync(String index, String type, String id, HttpEntity entity);


    //判断文档是否存在
    //判断type是否存在
    //判断索引是否存在

    //更新文档




}
