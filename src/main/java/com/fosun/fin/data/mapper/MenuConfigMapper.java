package com.fosun.fin.data.mapper;

import com.fosun.fin.data.model.MenuConfig;
import com.fosun.fin.data.model.UserInfo;
import com.fosun.fin.data.model.UserInfoDetail;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Maxin on 2017/5/18.
 */

@Mapper
public interface MenuConfigMapper {

    @Select("select * from t_dmp_menu_config where available='1'")
    @ResultType(MenuConfig.class)
    List<MenuConfig> selectAll();

    @Select("select * from user_info")
    @ResultType(UserInfo.class)
    List<UserInfo> selectUserInfo();

    @Select("select * from user_info_detail")
    @ResultType(UserInfoDetail.class)
    List<UserInfoDetail> selectUserInfoDetail();



//    @Insert("insert into t_dmp_menu_config (name,page_path) values(#{name},#{pagePath})")
//    void insertMenuConfig(String name, String pagePath);
//
//
//    @Insert("insert into t_dmp_menu_config (name,page_path,index_num) values(#{name},#{pagePath},#{indexNum})")
//    void insertMenuConfig(String name, String pagePath, int indexNum);
//
//    @Insert("insert into t_dmp_menu_config (parent_name,name,page_path) values(#{parentName},#{name},#{pagePath})")
//    void insertMenuConfig(String parentName, String name, String pagePath);

    @Insert("insert into t_dmp_menu_config (parent_name,name,page_path,index_num) values(#{parentName},#{name},#{pagePath},#{indexNum})")
    void insertMenuConfig(@Param("parentName") String parentName,@Param("name") String name,@Param("pagePath") String pagePath,@Param("indexNum") int indexNum);
}
