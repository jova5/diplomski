package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

import java.sql.Date;

@Data
public class AddResponse {
    private Integer id;
    private Integer storeId;
    private String image;
    private Date dateFrom;
    private Date dateTo;
    private String header;
    private String description;
    private Integer numOfVisit;
    private Boolean premium;
    private StoreResponse store;
}
