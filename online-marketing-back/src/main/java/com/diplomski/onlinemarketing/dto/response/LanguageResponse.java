package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

import java.util.Collection;

@Data
public class LanguageResponse {
    private Integer id;
    private String shortName;
    private String longName;
    private Collection<VocabularyResponse> vocabularies;
}
