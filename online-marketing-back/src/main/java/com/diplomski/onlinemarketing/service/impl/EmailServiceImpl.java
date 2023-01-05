package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Email;
import com.diplomski.onlinemarketing.repository.EmailRepository;
import com.diplomski.onlinemarketing.service.EmailService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl extends GenericServiceImpl<Email, Integer> implements EmailService {
    private final EmailRepository repository;

    public EmailServiceImpl(EmailRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
