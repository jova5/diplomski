package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class AddResponse {
    private Integer id;
    private Integer storeId;
    private String image;
    private String header;
    private String description;
    private Boolean premium;
//    private StoreResponse store;
}
