package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

import java.util.Collection;

@Data
public class StoreResponse {
    private Long id;
    private String name;
    private String description;
    private int numOfRating;
    private int sumOfRating;
    private String bannerImage;
    private String storeImage;
    private Collection<AddResponse> adds;
    private Collection<ContactResponse> contacts;
}
