package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Vocabulary;
import com.diplomski.onlinemarketing.repository.VocabularyRepository;
import com.diplomski.onlinemarketing.service.VocabularyService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class VocabularyServiceImpl extends GenericServiceImpl<Vocabulary, Integer> implements VocabularyService {
    private final VocabularyRepository repository;

    public VocabularyServiceImpl(VocabularyRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
