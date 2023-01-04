package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Language {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "key")
    private String key;
    @Basic
    @Column(name = "serbian")
    private String serbian;
    @Basic
    @Column(name = "english")
    private String english;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getSerbian() {
        return serbian;
    }

    public void setSerbian(String serbian) {
        this.serbian = serbian;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }
}
