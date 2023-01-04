package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "add", schema = "online-marketing")
@IdClass(AddEntityPK.class)
public class AddEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "store_id")
    private Long storeId;
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
    private int numOfVisit;
    @Basic
    @Column(name = "premium")
    private boolean premium;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStoreId() {
        return storeId;
    }

    public void setStoreId(Long storeId) {
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

    public int getNumOfVisit() {
        return numOfVisit;
    }

    public void setNumOfVisit(int numOfVisit) {
        this.numOfVisit = numOfVisit;
    }

    public boolean isPremium() {
        return premium;
    }

    public void setPremium(boolean premium) {
        this.premium = premium;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddEntity addEntity = (AddEntity) o;
        return Objects.equals(id, addEntity.id) && Objects.equals(storeId, addEntity.storeId) && numOfVisit == addEntity.numOfVisit && premium == addEntity.premium && Objects.equals(image, addEntity.image) && Objects.equals(dateFrom, addEntity.dateFrom) && Objects.equals(dateTo, addEntity.dateTo) && Objects.equals(header, addEntity.header) && Objects.equals(description, addEntity.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, storeId, image, dateFrom, dateTo, header, description, numOfVisit, premium);
    }
}
