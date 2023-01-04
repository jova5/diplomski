package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.dto.response.VocabularyResponse;
import com.diplomski.onlinemarketing.entity.Vocabulary;
import com.diplomski.onlinemarketing.service.VocabularyService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vocabulary")
public class VocabularyController extends GenericController<VocabularyResponse, VocabularyRequest, Vocabulary, Integer> {
    private final VocabularyService service;

    public VocabularyController(VocabularyService service) {
        super(service);
        this.service = service;
    }
}
