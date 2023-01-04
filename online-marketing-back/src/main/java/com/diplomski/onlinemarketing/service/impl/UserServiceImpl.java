package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.repository.UserRepository;
import com.diplomski.onlinemarketing.service.UserService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends GenericServiceImpl<User, Long> implements UserService {
    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
