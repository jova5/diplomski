package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

@Data
public class StoreRequest {
    private String name;
    private String description;
    private int numOfRating;
    private int sumOfRating;
    private String bannerImage;
    private String storeImage;
}
