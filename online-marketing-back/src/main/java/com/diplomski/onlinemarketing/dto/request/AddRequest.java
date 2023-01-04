package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

import java.sql.Date;

@Data
public class AddRequest {
    private String image;
    private Date dateFrom;
    private Date dateTo;
    private String header;
    private String description;
    private Integer numOfVisit;
    private Boolean premium;
}
