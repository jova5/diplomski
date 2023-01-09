package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.entity.Vocabulary;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.VocabularyRepository;
import com.diplomski.onlinemarketing.service.VocabularyService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class VocabularyServiceImpl extends GenericServiceImpl<Vocabulary, Integer> implements VocabularyService {
    private final VocabularyRepository repository;

    public VocabularyServiceImpl(VocabularyRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Transactional
    @Override
    public Vocabulary updateCustom(Integer id, VocabularyRequest vocabularyRequest) throws RestException {
        Vocabulary dbObject = repository.findById(id)
                .orElseThrow(() -> new RestException("Could not find object with id: " + id, HttpStatus.BAD_REQUEST));
        dbObject.setKey(vocabularyRequest.getKey());
        dbObject.setMeaning(vocabularyRequest.getMeaning());
        return repository.saveAndFlush(dbObject);
    }
}
