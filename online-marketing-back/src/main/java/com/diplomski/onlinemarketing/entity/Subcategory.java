package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "subcategory")
public class Subcategory {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private Category category;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategoryByCategoryId() {
        return category;
    }

    public void setCategoryByCategoryId(Category categoryByCategoryId) {
        this.category = categoryByCategoryId;
    }
}
