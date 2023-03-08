package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class UserResponse {
    private Integer id;
    private String name;
    private String password;
    private String email;
    private Integer storeId;
    private String type;
}
