package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.generic.GenericService;

import java.lang.reflect.InvocationTargetException;

public interface StoreService extends GenericService<Store, Integer> {
    Boolean deleteCustom(Integer id) throws RestException, InvocationTargetException, IllegalAccessException;

    void addNewRating(Integer id, Integer grade) throws RestException;
}
