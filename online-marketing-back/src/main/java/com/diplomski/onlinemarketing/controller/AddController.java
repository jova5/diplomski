package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.AddRequest;
import com.diplomski.onlinemarketing.dto.response.AddResponse;
import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.service.AddService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/add")
public class AddController extends GenericController<AddResponse, AddRequest, Add, Integer> {
    private final AddService service;
    private final ModelMapper modelMapper;

    public AddController(AddService service, ModelMapper modelMapper) {
        super(service);
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/findAll/store/{id}")
    public ResponseEntity<?> findAllAddsForStore(@PathVariable(name = "id") Integer storeId) {
        return ResponseEntity.ok(service.findAllAddsForStore(storeId).stream().map(item -> modelMapper.map(item,AddResponse.class)));
    }
}
