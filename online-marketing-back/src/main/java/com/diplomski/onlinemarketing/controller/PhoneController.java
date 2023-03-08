package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.PhoneRequest;
import com.diplomski.onlinemarketing.dto.response.PhoneResponse;
import com.diplomski.onlinemarketing.entity.Phone;
import com.diplomski.onlinemarketing.service.PhoneService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/phone")
public class PhoneController extends GenericController<PhoneResponse, PhoneRequest, Phone, Integer> {
    private final PhoneService service;

    public PhoneController(PhoneService service) {
        super(service);
        this.service = service;
    }
}
