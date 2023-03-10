package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "add")
public class Add {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "image")
    private String image;
    @Basic
    @Column(name = "header")
    private String header;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "premium")
    private Boolean premium;
    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id", nullable = false)
    private Store store;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "add_has_category",
            joinColumns = @JoinColumn(name = "add_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Collection<Category> categories;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getPremium() {
        return premium;
    }

    public void setPremium(Boolean premium) {
        this.premium = premium;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public Collection<Category> getCategories() {
        return categories;
    }

    public void setCategories(Collection<Category> categories) {
        this.categories = categories;
    }
}
