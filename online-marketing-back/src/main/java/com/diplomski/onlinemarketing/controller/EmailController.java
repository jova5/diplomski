package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.EmailRequest;
import com.diplomski.onlinemarketing.dto.response.EmailResponse;
import com.diplomski.onlinemarketing.entity.Email;
import com.diplomski.onlinemarketing.service.EmailService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class EmailController extends GenericController<EmailResponse, EmailRequest, Email, Integer> {
    private final EmailService service;

    public EmailController(EmailService service) {
        super(service);
        this.service = service;
    }
}
