package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Phone;
import com.diplomski.onlinemarketing.repository.PhoneRepository;
import com.diplomski.onlinemarketing.service.PhoneService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class PhoneServiceImpl extends GenericServiceImpl<Phone, Integer> implements PhoneService {
    private final PhoneRepository repository;

    public PhoneServiceImpl(PhoneRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
