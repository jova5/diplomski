package com.diplomski.onlinemarketing.controller.generic;

import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.generic.GenericService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.ParameterizedType;

public class GenericController<RES,REQ,T,ID> {
    private final GenericService<T, ID> service;
    private final ModelMapper modelMapper;
    private final Class<RES> responseType;
    private final Class<T> objectType;


    public GenericController(GenericService<T, ID> service) {
        this.service = service;
        this.modelMapper = new ModelMapper();
        this.responseType = (Class<RES>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        this.objectType = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[2];
//        this.modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAll().stream().map(item -> modelMapper.map(item, responseType)).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") ID id) throws RestException {
        return ResponseEntity.ok(modelMapper.map(service.getById(id), responseType));
    }


    @PostMapping
    public ResponseEntity<?> insert(@Valid @RequestBody REQ req){
        T object = modelMapper.map(req, objectType);
        return ResponseEntity.ok(modelMapper.map(service.insert(object), responseType));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") ID id,  @Valid @RequestBody REQ req) throws Exception{
        T object = modelMapper.map(req, objectType);
        return ResponseEntity.ok(modelMapper.map(service.update(id ,object), responseType));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") ID id){
        return ResponseEntity.ok(service.delete(id));
    }

}
