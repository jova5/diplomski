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

import java.lang.reflect.InvocationTargetException;
import java.util.List;

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
        List<StoresForUsersResponse> list = service.getAll().stream().map(item -> modelMapper.map(item, StoresForUsersResponse.class)).toList();
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/deleteCustom/{id}")
    public ResponseEntity<?> deleteCustom(@PathVariable(name = "id") Integer id) throws RestException, InvocationTargetException, IllegalAccessException {
        return ResponseEntity.ok(service.deleteCustom(id));
    }

    @PutMapping("/{id}/grade/{gradeValue}")
    public void addNewRating(@PathVariable(name = "id") Integer id,
                             @PathVariable(name = "gradeValue") Integer grade) throws RestException {
        service.addNewRating(id, grade);
    }
}
