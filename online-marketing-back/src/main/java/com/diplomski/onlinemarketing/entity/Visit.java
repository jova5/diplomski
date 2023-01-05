package com.diplomski.onlinemarketing.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Visit {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "date")
    private Date date;
    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id")
    private Store store;
    @ManyToOne
    @JoinColumn(name = "add_id", referencedColumnName = "id")
    private Add add;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public Add getAdd() {
        return add;
    }

    public void setAdd(Add add) {
        this.add = add;
    }
}
