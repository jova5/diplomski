package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

@Data
public class EmailRequest {
    private Integer contactId;
    private String email;
}
