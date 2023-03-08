package com.diplomski.onlinemarketing.dto.other;

import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.entity.Store;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.sql.Date;

@Data
public class VisitDTO {
    private Integer id;
    private Date date;
    private String city;
    private String region;
    private String country;
    private Integer storeId;
    private Integer addId;
}
