package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.ContactRequest;
import com.diplomski.onlinemarketing.dto.response.ContactResponse;
import com.diplomski.onlinemarketing.entity.Contact;
import com.diplomski.onlinemarketing.service.ContactService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
public class ContactController extends GenericController<ContactResponse, ContactRequest, Contact, Integer> {
    private final ContactService service;
    public ContactController(ContactService service) {
        super(service);
        this.service = service;
    }
}
