package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.entity.Vocabulary;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.generic.GenericService;

public interface VocabularyService extends GenericService<Vocabulary, Integer> {
    Vocabulary updateCustom(Integer id, VocabularyRequest vocabularyRequest) throws RestException;
}
