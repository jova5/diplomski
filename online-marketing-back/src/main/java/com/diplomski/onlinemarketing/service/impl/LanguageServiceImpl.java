package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Language;
import com.diplomski.onlinemarketing.repository.LanguageRepository;
import com.diplomski.onlinemarketing.service.LanguageService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class LanguageServiceImpl extends GenericServiceImpl<Language, Integer> implements LanguageService {
    private final LanguageRepository repository;

    public LanguageServiceImpl(LanguageRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
