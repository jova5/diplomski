package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "store", schema = "online-marketing")
public class StoreEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "num_of_rating")
    private int numOfRating;
    @Basic
    @Column(name = "sum_of_rating")
    private int sumOfRating;
    @Basic
    @Column(name = "banner_image")
    private String bannerImage;
    @Basic
    @Column(name = "store_image")
    private String storeImage;
    @Basic
    @Column(name = "num_of_visit")
    private Integer numOfVisit;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public int getNumOfRating() {
        return numOfRating;
    }

    public void setNumOfRating(int numOfRating) {
        this.numOfRating = numOfRating;
    }

    public int getSumOfRating() {
        return sumOfRating;
    }

    public void setSumOfRating(int sumOfRating) {
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

    public Integer getNumOfVisit() {
        return numOfVisit;
    }

    public void setNumOfVisit(Integer numOfVisit) {
        this.numOfVisit = numOfVisit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StoreEntity that = (StoreEntity) o;
        return Objects.equals(id, that.id) && numOfRating == that.numOfRating && sumOfRating == that.sumOfRating && Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(bannerImage, that.bannerImage) && Objects.equals(storeImage, that.storeImage) && Objects.equals(numOfVisit, that.numOfVisit);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, numOfRating, sumOfRating, bannerImage, storeImage, numOfVisit);
    }
}
