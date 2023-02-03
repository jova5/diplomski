package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService service;

    public AuthenticationController(AuthenticationService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam(name = "username") String username,
                                   @RequestParam(name = "password") String password) {
        return ResponseEntity.ok(service.login(username, password));
    }
}
