package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(AddPK.class)
public class Add {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "store_id")
    private Integer storeId;
    @Basic
    @Column(name = "image")
    private String image;
    @Basic
    @Column(name = "date_from")
    private Date dateFrom;
    @Basic
    @Column(name = "date_to")
    private Date dateTo;
    @Basic
    @Column(name = "header")
    private String header;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "num_of_visit")
    private Integer numOfVisit;
    @Basic
    @Column(name = "premium")
    private Boolean premium;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStoreId() {
        return storeId;
    }

    public void setStoreId(Integer storeId) {
        this.storeId = storeId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
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

    public Integer getNumOfVisit() {
        return numOfVisit;
    }

    public void setNumOfVisit(Integer numOfVisit) {
        this.numOfVisit = numOfVisit;
    }

    public Boolean getPremium() {
        return premium;
    }

    public void setPremium(Boolean premium) {
        this.premium = premium;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Add add = (Add) o;
        return Objects.equals(id, add.id) && Objects.equals(storeId, add.storeId) && Objects.equals(image, add.image) && Objects.equals(dateFrom, add.dateFrom) && Objects.equals(dateTo, add.dateTo) && Objects.equals(header, add.header) && Objects.equals(description, add.description) && Objects.equals(numOfVisit, add.numOfVisit) && Objects.equals(premium, add.premium);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, storeId, image, dateFrom, dateTo, header, description, numOfVisit, premium);
    }
}
