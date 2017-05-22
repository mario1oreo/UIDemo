package com.fosun.fin.data.util.menu;

import com.fosun.fin.data.model.MenuConfig;
import com.fosun.fin.data.model.MenuNode;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by MaXin on 2017/5/19.
 */
public class MenuBuilderUtil {


    List<MenuNode> menuNodeList;

    List<MenuNode> targetMenuList;

    public MenuBuilderUtil(List<MenuNode> list) {
        this.menuNodeList = list;
        this.targetMenuList = new ArrayList<MenuNode>();
    }

    /**
     * 构建目标List
     */
    public void buildTargetMenuList() {
        for (MenuNode node : menuNodeList) {
            if (node.getLevel() == 1) {
                //一级菜单
                buildMenuTree(node);
            }//二三四级菜单不做处理
        }
    }

    /**
     * 递归调用构建菜单树
     *
     * @param node
     */
    public void buildMenuTree(MenuNode node) {
        targetMenuList.add(node);
        List<MenuNode> chirldren = getChildren(node);
        if (!chirldren.isEmpty()) {
            for (MenuNode chirld : chirldren) {
                buildMenuTree(chirld);
            }
        }
    }

    /**
     * 获取到当前菜单栏位的所有下一级菜单列表
     *
     * @param menuNode
     * @return
     */
    public List<MenuNode> getChildren(MenuNode menuNode) {
        List<MenuNode> childrenList = new ArrayList<MenuNode>();
        String menuNodeName = menuNode.getName();
        Integer level = menuNode.getLevel();
        for (MenuNode node : menuNodeList) {
            if (node.getLevel() == level + 1 && menuNodeName.equals(node.getParentName())) {
                childrenList.add(node);
            }
        }
        return childrenList;
    }

    public List<MenuNode> getTargetMenuList() {
        return targetMenuList;
    }

    public static MenuNode translateConfigToNode(MenuConfig config) {
        MenuNode node = new MenuNode();
        node.setId(config.getId());
        node.setParentId(config.getParent_id());
        node.setParentName(config.getParent_name());
        node.setIndexNum(config.getIndex_num());
        node.setLevel(config.getLevel());
        node.setName(config.getName());
        node.setPagePath(config.getPage_path());
        return node;
    }

    public static List<MenuNode> translateConfigToNode(List<MenuConfig> configList) {
        List<MenuNode> nodeList = new ArrayList<MenuNode>();
        for (MenuConfig config : configList) {
            nodeList.add(translateConfigToNode(config));
        }
        return nodeList;
    }

    public static MenuConfig translateNodeToConfig(MenuNode node) {
        MenuConfig config = new MenuConfig();
        config.setId(node.getId());
        config.setParent_id(node.getParentId());
        config.setPage_path(node.getPagePath());
        config.setParent_name(node.getParentName());
        config.setIndex_num(node.getIndexNum());
        config.setName(node.getName());
        config.setLevel(node.getLevel());
        return config;
    }

    public static List<MenuConfig> translateNodeToConfig(List<MenuNode> nodeList) {
        List<MenuConfig> configList = new ArrayList<MenuConfig>();
        for (MenuNode node : nodeList) {
            configList.add(translateNodeToConfig(node));
        }
        return configList;
    }
}
