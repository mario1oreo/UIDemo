package com.fosun.fin.data.service.impl;

import com.fosun.fin.data.mapper.MenuConfigMapper;
import com.fosun.fin.data.model.MenuConfig;
import com.fosun.fin.data.model.MenuNode;
import com.fosun.fin.data.model.UserInfo;
import com.fosun.fin.data.model.UserInfoDetail;
import com.fosun.fin.data.service.MenuConfigService;
import com.fosun.fin.data.util.menu.MenuBuilderUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

/**
 * Created by Administrator on 2017/5/18.
 */
@Service
public class MenuConfigServiceImpl implements MenuConfigService {

    @Autowired
    private MenuConfigMapper  menuConfigMapper;

    @Override
    public List<MenuConfig> selectAll() {
        List<MenuConfig> configList = menuConfigMapper.selectAll();
        return orderMenuConfig(configList);
    }

    @Override
    public List<UserInfo> selectUserInfo() {
        return menuConfigMapper.selectUserInfo();
    }

    @Override
    public List<UserInfoDetail> selectUserInfoDetail() {
        return menuConfigMapper.selectUserInfoDetail();
    }

    private List<MenuConfig> orderMenuConfig(List<MenuConfig> list) {
        List<MenuConfig> orderList = new ArrayList<MenuConfig>();
        // TODO 预处理list   转换成List<MenuNode> 进行目标菜单列表拼接
        List<MenuNode> nodeList = MenuBuilderUtil.translateConfigToNode(list);
        MenuBuilderUtil menuBuilderUtil = new MenuBuilderUtil(nodeList);
        menuBuilderUtil.buildTargetMenuList();
        orderList.addAll(MenuBuilderUtil.translateNodeToConfig(menuBuilderUtil.getTargetMenuList()));
        for (MenuConfig order : orderList) {
        System.out.println("orderList:"+order.toString());
        }
        return orderList;
    }

    @Override
    public void insertMenuConfig(MenuConfig menuConfig) {
        if (menuConfig != null) {
            if (StringUtils.isNotBlank(menuConfig.getParent_name()) && StringUtils.isNotBlank(menuConfig.getName()) && StringUtils.isNotBlank(menuConfig.getPage_path()) && menuConfig.getIndex_num() != 0) {
                insertMenuConfig(menuConfig.getParent_name(), menuConfig.getName(), menuConfig.getPage_path(), menuConfig.getIndex_num());
            } else if (StringUtils.isNotBlank(menuConfig.getParent_name()) && StringUtils.isNotBlank(menuConfig.getName()) && StringUtils.isNotBlank(menuConfig.getPage_path()) && menuConfig.getIndex_num() == 0) {
                insertMenuConfig(menuConfig.getParent_name(), menuConfig.getName(), menuConfig.getPage_path());
            } else if (StringUtils.isNotBlank(menuConfig.getName()) && StringUtils.isNotBlank(menuConfig.getPage_path()) && menuConfig.getIndex_num() != 0) {
                insertMenuConfig(menuConfig.getName(), menuConfig.getPage_path(), menuConfig.getIndex_num());
            } else if (StringUtils.isNotBlank(menuConfig.getName()) && StringUtils.isNotBlank(menuConfig.getPage_path()) && menuConfig.getIndex_num() == 0) {
                insertMenuConfig(menuConfig.getName(), menuConfig.getPage_path());
            } else {
                System.out.println("参数不在录入模板范围！");
            }

        } else {
            System.out.println("menuConfig is null!");
        }
    }

    @Override
    public void insertMenuConfig(String name, String pagePath) {
        insertMenuConfig("",name, pagePath);
    }

    @Override
    public void insertMenuConfig(String name, String pagePath, int indexNum) {
        insertMenuConfig("",name, pagePath, indexNum);
    }

    @Override
    public void insertMenuConfig(String parentName, String name, String pagePath) {
        insertMenuConfig(parentName,name,pagePath,0);
    }

    @Override
    public void insertMenuConfig(String parentName, String name, String pagePath, int indexNum) {
        menuConfigMapper.insertMenuConfig(parentName,name, pagePath, indexNum);
    }
}
