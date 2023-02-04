package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.exception.RestException;

public interface AuthenticationService {
    User login(String username, String password) throws RestException;
}
