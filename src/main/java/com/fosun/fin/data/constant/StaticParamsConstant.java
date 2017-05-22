package com.fosun.fin.data.constant;

import com.alibaba.fastjson.serializer.SerializerFeature;

/**
 * Created by Administrator on 2017/5/18.
 */
public class StaticParamsConstant {

    /**
     * Json转换序列化特征
     */
    public static SerializerFeature[] features = {SerializerFeature.WriteNullNumberAsZero, SerializerFeature.WriteNullStringAsEmpty, SerializerFeature.DisableCircularReferenceDetect};
}
