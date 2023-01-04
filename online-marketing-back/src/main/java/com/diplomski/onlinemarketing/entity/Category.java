package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
public class Category {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "image")
    private String image;
    @ManyToMany(fetch = FetchType.LAZY)
    private Collection<Add> adds;
    @ManyToMany(fetch = FetchType.LAZY)
    private Collection<Store> stores;
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private Collection<Subcategory> subcategories;

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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Collection<Add> getAdds() {
        return adds;
    }

    public void setAdds(Collection<Add> adds) {
        this.adds = adds;
    }

    public Collection<Store> getStores() {
        return stores;
    }

    public void setStores(Collection<Store> stores) {
        this.stores = stores;
    }

    public Collection<Subcategory> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(Collection<Subcategory> subcategories) {
        this.subcategories = subcategories;
    }
}
