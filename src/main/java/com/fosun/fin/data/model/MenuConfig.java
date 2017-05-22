package com.fosun.fin.data.model;

import lombok.Data;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by MaXin on 2017/5/18.
 */

@Data
public class MenuConfig {

    private Integer id;
    private String parent_name;
    private Integer parent_id;
    private Integer index_num = 0;
    private Integer level;
    private String name;
    private String page_path;
    private String available;
    private String created_by;
    private Date created_dt;
    private String updated_by;
    private Date updated_dt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getParent_name() {
        return parent_name;
    }

    public void setParent_name(String parent_name) {
        this.parent_name = parent_name;
    }

    public Integer getParent_id() {
        return parent_id;
    }

    public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
    }

    public Integer getIndex_num() {
        return index_num;
    }

    public void setIndex_num(Integer index_num) {
        this.index_num = index_num;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPage_path() {
        return page_path;
    }

    public void setPage_path(String page_path) {
        this.page_path = page_path;
    }

    public String getAvailable() {
        return available;
    }

    public void setAvailable(String available) {
        this.available = available;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public Date getCreated_dt() {
        return created_dt;
    }

    public void setCreated_dt(Date created_dt) {
        this.created_dt = created_dt;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    public void setUpdated_by(String updated_by) {
        this.updated_by = updated_by;
    }

    public Date getUpdated_dt() {
        return updated_dt;
    }

    public void setUpdated_dt(Date updated_dt) {
        this.updated_dt = updated_dt;
    }

    @Override
    public String toString() {
        StringBuffer sb = new StringBuffer();
        sb.append(getName()).append("---").append(getLevel()).append("---").append(getIndex_num()).append("---").append(getPage_path()).append("---").append(getParent_name());
        return sb.toString();
    }
}
