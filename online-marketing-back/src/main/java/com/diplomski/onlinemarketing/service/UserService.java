package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.entity.User;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.generic.GenericService;

public interface UserService extends GenericService<User, Integer> {
    User findByUserNameAndPassword(String userName, String password) throws RestException;
    User findUserByStoreId(Integer storeId) throws RestException;
}
