package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

import java.util.Collection;

@Data
public class ContactRequest {
    private Integer storeId;
    private String type;
    private String address;
    private Double latitude;
    private Double longitude;
//    private Collection<EmailRequest> emails;
//    private Collection<PhoneRequest> phones;
}
