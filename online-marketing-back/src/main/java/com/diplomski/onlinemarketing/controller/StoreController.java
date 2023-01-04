package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.StoreRequest;
import com.diplomski.onlinemarketing.dto.response.StoreResponse;
import com.diplomski.onlinemarketing.entity.StoreEntity;
import com.diplomski.onlinemarketing.service.StoreService;
import org.springframework.web.bind.annotation.RestController;

@RestController("/store")
public class StoreController extends GenericController<StoreResponse, StoreRequest, StoreEntity, Long> {
    private final StoreService service;

    public StoreController(StoreService service) {
        super(service);
        this.service = service;
    }
}
