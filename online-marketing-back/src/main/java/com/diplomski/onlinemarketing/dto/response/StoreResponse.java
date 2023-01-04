package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class StoreResponse {
    private Long id;
    private String name;
    private String description;
    private int numOfRating;
    private int sumOfRating;
    private String bannerImage;
    private String storeImage;
    private Integer numOfVisit;
}
