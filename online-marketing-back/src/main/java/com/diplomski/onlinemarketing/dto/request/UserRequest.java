package com.diplomski.onlinemarketing.dto.request;

import com.diplomski.onlinemarketing.dto.response.StoreResponse;
import lombok.Data;

@Data
public class UserRequest {
    private String name;
    private String password;
    private String email;
    private Integer storeId;
    private String type;
    private StoreResponse store;
}
