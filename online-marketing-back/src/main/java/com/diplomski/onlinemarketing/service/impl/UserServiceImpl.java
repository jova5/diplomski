package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.UserRepository;
import com.diplomski.onlinemarketing.service.UserService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends GenericServiceImpl<User, Integer> implements UserService {
    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Override
    public User findByUserNameAndPassword(String userName, String password) throws RestException {
        return repository.findByNameAndPassword(userName, password).orElseThrow(
                () -> new RestException(
                        "Could not find user with username: " + userName + " and password: " + password,
                        HttpStatus.NOT_FOUND)
        );
    }
}
