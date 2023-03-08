package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

import java.util.Collection;

@Data
public class ContactResponse {
    private Integer id;
    private Integer storeId;
    private String type;
    private String address;
    private Double latitude;
    private Double longitude;
    private Collection<EmailResponse> emails;
    private Collection<PhoneResponse> phones;
}
