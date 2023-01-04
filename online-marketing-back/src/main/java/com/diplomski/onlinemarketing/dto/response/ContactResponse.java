package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class ContactResponse {
    private Integer id;
    private Integer storeId;
    private String type;
    private String address;
    private Double latitude;
    private Double longitude;
    private EmailResponse email;
    private PhoneResponse phone;
}
