package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.dto.response.VocabularyResponse;
import com.diplomski.onlinemarketing.entity.Vocabulary;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.VocabularyService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vocabulary")
public class VocabularyController extends GenericController<VocabularyResponse, VocabularyRequest, Vocabulary, Integer> {
    private final VocabularyService service;

    public VocabularyController(VocabularyService service) {
        super(service);
        this.service = service;
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustom(@PathVariable(name = "id") Integer id,
                                          @Valid @RequestBody VocabularyRequest vocabularyRequest
    ) throws RestException {
        return ResponseEntity.ok(modelMapper.map(service.updateCustom(id, vocabularyRequest), VocabularyResponse.class));
    }
}
