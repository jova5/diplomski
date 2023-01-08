package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "store")
public class Store {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "num_of_rating")
    private Integer numOfRating;
    @Basic
    @Column(name = "sum_of_rating")
    private Integer sumOfRating;
    @Basic
    @Column(name = "banner_image")
    private String bannerImage;
    @Basic
    @Column(name = "store_image")
    private String storeImage;
    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    private Collection<Add> adds;
    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    private Collection<Contact> contacts;
    @ManyToMany(fetch = FetchType.LAZY)
    private Collection<Category> categories;
    @OneToOne
    private User user;
    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    private Collection<Visit> visits;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getNumOfRating() {
        return numOfRating;
    }

    public void setNumOfRating(Integer numOfRating) {
        this.numOfRating = numOfRating;
    }

    public Integer getSumOfRating() {
        return sumOfRating;
    }

    public void setSumOfRating(Integer sumOfRating) {
        this.sumOfRating = sumOfRating;
    }

    public String getBannerImage() {
        return bannerImage;
    }

    public void setBannerImage(String bannerImage) {
        this.bannerImage = bannerImage;
    }

    public String getStoreImage() {
        return storeImage;
    }

    public void setStoreImage(String storeImage) {
        this.storeImage = storeImage;
    }

    public Collection<Add> getAdds() {
        return adds;
    }

    public void setAdds(Collection<Add> adds) {
        this.adds = adds;
    }

    public Collection<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Collection<Contact> contacts) {
        this.contacts = contacts;
    }

    public Collection<Category> getCategories() {
        return categories;
    }

    public void setCategories(Collection<Category> categories) {
        this.categories = categories;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<Visit> getVisits() {
        return visits;
    }

    public void setVisits(Collection<Visit> visits) {
        this.visits = visits;
    }
}
