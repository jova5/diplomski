package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.service.generic.GenericService;

import java.util.List;

public interface AddService extends GenericService<Add, Integer> {
    List<Add> findAllAddsForStore(Integer storeId);
}
