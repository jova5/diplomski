package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.LanguageRequest;
import com.diplomski.onlinemarketing.dto.response.LanguageResponse;
import com.diplomski.onlinemarketing.entity.Language;
import com.diplomski.onlinemarketing.service.LanguageService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/language")
public class LanguageController extends GenericController<LanguageResponse, LanguageRequest, Language, Integer> {
    private final LanguageService service;

    public LanguageController(LanguageService service) {
        super(service);
        this.service = service;
    }
}
