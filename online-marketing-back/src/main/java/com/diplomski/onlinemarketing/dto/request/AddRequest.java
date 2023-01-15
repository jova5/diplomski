package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

@Data
public class AddRequest {
    private Integer storeId;
    private String image;
    private String header;
    private String description;
    private Boolean premium;
}
