package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "language", schema = "online-marketing")
public class LanguageEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "key")
    private String key;
    @Basic
    @Column(name = "serbian")
    private String serbian;
    @Basic
    @Column(name = "english")
    private String english;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LanguageEntity that = (LanguageEntity) o;
        return id == that.id && Objects.equals(key, that.key) && Objects.equals(serbian, that.serbian) && Objects.equals(english, that.english);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, key, serbian, english);
    }
}
