package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class StoreWSResponse {
    private Long id;
    private String name;
    private int numOfRating;
    private int sumOfRating;
}
