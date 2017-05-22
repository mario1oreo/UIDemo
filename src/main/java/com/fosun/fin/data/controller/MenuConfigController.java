package com.fosun.fin.data.controller;

import com.alibaba.fastjson.JSONObject;
import com.fosun.fin.data.constant.StaticParamsConstant;
import com.fosun.fin.data.model.MenuConfig;
import com.fosun.fin.data.model.UserInfo;
import com.fosun.fin.data.model.UserInfoDetail;
import com.fosun.fin.data.service.MenuConfigService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by MaXin on 2017/5/18.
 */

@Controller
public class MenuConfigController {

    Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MenuConfigService menuConfigServiceImpl;

    @RequestMapping("/menuConfig")
    public String showMenuConfig(Map<String, Object> model) {
        log.info("showMenuConfig!");
        model.put("time", new Date());
        List<MenuConfig> config = menuConfigServiceImpl.selectAll();
        model.put("message", JSONObject.toJSONString(config, StaticParamsConstant.features));
        log.info("message:" + model.get("message"));
        return "welcome";
    }

    @RequestMapping(value = "/menuConfigRest", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public String showMenuConfigRest(Map<String, Object> model) {
        log.info("menuConfigRest!");
        List<MenuConfig> config = menuConfigServiceImpl.selectAll();
        String result = JSONObject.toJSONString(config, StaticParamsConstant.features);
        log.info("result:" + result);
        return result;
    }

    @RequestMapping("/addMenuConfig")
    @ResponseBody
    public String insertMenuConfig(Map<String, Object> model, MenuConfig menuConfig) {
        log.info("addMenuConfig!");
        try {
            menuConfigServiceImpl.insertMenuConfig(menuConfig);
            log.info("insert succeed...   result:true!");
            return "true";
        } catch (Exception e) {
            e.printStackTrace();
            log.info("insert fail...   result:false!");
            return "false";
        }
    }


    @RequestMapping(value = "/queryuserinfo", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public String queryuserinfo(Map<String, Object> model) {
        log.info("queryuserinfo!");
        List<UserInfo> userInfo = menuConfigServiceImpl.selectUserInfo();
        String result1 = JSONObject.toJSONString(userInfo, StaticParamsConstant.features);
        List<UserInfoDetail> userInfoDetail = menuConfigServiceImpl.selectUserInfoDetail();
        String result2 = JSONObject.toJSONString(userInfoDetail, StaticParamsConstant.features);
        log.info("result:" + result1 + result2);
        return  result1 + result2;
    }
}
