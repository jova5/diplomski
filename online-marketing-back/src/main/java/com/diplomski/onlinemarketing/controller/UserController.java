package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.UserRequest;
import com.diplomski.onlinemarketing.dto.response.UserResponse;
import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController extends GenericController<UserResponse, UserRequest, User, Integer> {
    private final UserService service;

    public UserController(UserService service) {
        super(service);
        this.service = service;
    }
}
