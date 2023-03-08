package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Contact;
import com.diplomski.onlinemarketing.repository.ContactRepository;
import com.diplomski.onlinemarketing.service.ContactService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl extends GenericServiceImpl<Contact, Integer> implements ContactService {
    private final ContactRepository repository;

    public ContactServiceImpl(ContactRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
