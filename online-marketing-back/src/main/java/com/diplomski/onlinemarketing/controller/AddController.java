package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.AddRequest;
import com.diplomski.onlinemarketing.dto.response.AddResponse;
import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.entity.AddPK;
import com.diplomski.onlinemarketing.service.AddService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/add")
public class AddController extends GenericController<AddResponse, AddRequest, Add, AddPK> {
    private final AddService service;

    public AddController(AddService service) {
        super(service);
        this.service = service;
    }
}
