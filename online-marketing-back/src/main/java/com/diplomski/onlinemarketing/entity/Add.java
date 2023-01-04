package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Add {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
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
    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id", nullable = false)
    private Store store;
    @ManyToMany(fetch = FetchType.LAZY)
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
