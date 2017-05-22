package com.fosun.fin.data.service;

import com.fosun.fin.data.mapper.MenuConfigMapper;
import com.fosun.fin.data.model.MenuConfig;
import com.fosun.fin.data.model.UserInfo;
import com.fosun.fin.data.model.UserInfoDetail;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Administrator on 2017/5/18.
 */
public interface MenuConfigService {

    public List<MenuConfig> selectAll();

    public List<UserInfo> selectUserInfo();

    public List<UserInfoDetail> selectUserInfoDetail();

    //    生成菜单信息
    public void insertMenuConfig(MenuConfig menuConfig);

    //    生成一级菜单，默认无序
    public void insertMenuConfig(String name, String pagePath);

    //    生成一级菜单，指定顺序
    public void insertMenuConfig(String name, String pagePath, int indexNum);

    //    指定菜单下生成制定菜单，默认无序
    public void insertMenuConfig(String parentName, String name, String pagePath);

    //    指定菜单下生成制定菜单，指定顺序
    public void insertMenuConfig(String parentName, String name, String pagePath, int indexNum);

}
