package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "vocabulary")
public class Vocabulary {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "key")
    private String key;
    @Basic
    @Column(name = "meaning")
    private String meaning;
    @ManyToOne
    @JoinColumn(name = "language_id", referencedColumnName = "id", nullable = false)
    private Language language;

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

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }
}
