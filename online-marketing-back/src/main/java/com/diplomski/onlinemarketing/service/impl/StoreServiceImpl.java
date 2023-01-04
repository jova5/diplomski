package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.repository.StoreRepository;
import com.diplomski.onlinemarketing.service.StoreService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class StoreServiceImpl extends GenericServiceImpl<Store, Long> implements StoreService {
    private final StoreRepository repository;

    public StoreServiceImpl(StoreRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
