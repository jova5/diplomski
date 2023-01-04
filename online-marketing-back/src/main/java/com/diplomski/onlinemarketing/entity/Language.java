package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
public class Language {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "short_name")
    private String shortName;
    @OneToMany(mappedBy = "language")
    private Collection<Vocabulary> vocabularies;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public Collection<Vocabulary> getVocabularies() {
        return vocabularies;
    }

    public void setVocabularies(Collection<Vocabulary> vocabularies) {
        this.vocabularies = vocabularies;
    }
}
