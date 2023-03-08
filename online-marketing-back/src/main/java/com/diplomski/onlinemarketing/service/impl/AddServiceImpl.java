package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.repository.AddRepository;
import com.diplomski.onlinemarketing.service.AddService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddServiceImpl extends GenericServiceImpl<Add, Integer> implements AddService {
    private final AddRepository repository;

    public AddServiceImpl(AddRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Override
    public List<Add> findAllAddsForStore(Integer storeId) {
        return repository.findAddByStore_Id(storeId);
    }
}
