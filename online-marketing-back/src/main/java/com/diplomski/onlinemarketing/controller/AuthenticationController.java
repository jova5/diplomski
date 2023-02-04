package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.dto.response.UserResponse;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.AuthenticationService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService service;

    private final ModelMapper modelMapper;
    public AuthenticationController(AuthenticationService service, ModelMapper modelMapper) {
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam(name = "username") String username,
                                   @RequestParam(name = "password") String password) throws RestException {
        return ResponseEntity.ok(modelMapper.map(service.login(username, password), UserResponse.class));
    }
}
