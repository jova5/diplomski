package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.AuthenticationService;
import com.diplomski.onlinemarketing.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserService userService;

    public AuthenticationServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public Boolean login(String username, String password) {
        try {
            User user = userService.findByUserNameAndPassword(username, password);
            return user != null;
        } catch (RestException e) {
            return false;
        }
    }
}
