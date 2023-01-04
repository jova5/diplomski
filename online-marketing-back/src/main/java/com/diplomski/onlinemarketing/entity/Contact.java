package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
public class Contact {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "latitude")
    private Double latitude;
    @Basic
    @Column(name = "longitude")
    private Double longitude;
    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id", nullable = false)
    private Store store;
    @OneToMany(mappedBy = "contact", fetch = FetchType.LAZY)
    private Collection<Email> emails;
    @OneToMany(mappedBy = "contact", fetch = FetchType.LAZY)
    private Collection<Phone> phones;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public Collection<Email> getEmails() {
        return emails;
    }

    public void setEmails(Collection<Email> emails) {
        this.emails = emails;
    }

    public Collection<Phone> getPhones() {
        return phones;
    }

    public void setPhones(Collection<Phone> phones) {
        this.phones = phones;
    }
}
