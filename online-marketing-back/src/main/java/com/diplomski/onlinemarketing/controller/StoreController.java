package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.StoreRequest;
import com.diplomski.onlinemarketing.dto.response.StoreResponse;
import com.diplomski.onlinemarketing.dto.response.StoresForUsersResponse;
import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.StoreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/store")
public class StoreController extends GenericController<StoreResponse, StoreRequest, Store, Integer> {
    private final StoreService service;

    public StoreController(StoreService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/forUsers")
    public ResponseEntity<?> getStoresForUsers(){
        return ResponseEntity.ok(modelMapper.map(service.getAll(), StoresForUsersResponse.class));
    }

    @DeleteMapping("/deleteCustom/{id}")
    public ResponseEntity<?> deleteCustom(@PathVariable(name = "id") Integer id) throws RestException {
        return ResponseEntity.ok(service.deleteCustom(id));
    }
}
