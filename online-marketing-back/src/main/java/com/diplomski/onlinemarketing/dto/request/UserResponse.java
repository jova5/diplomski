package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

@Data
public class UserResponse {
    private String name;
    private String password;
    private String email;
    private Integer storeId;
    private String type;
}
