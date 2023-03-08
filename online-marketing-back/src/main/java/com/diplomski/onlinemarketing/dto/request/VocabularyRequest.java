package com.diplomski.onlinemarketing.dto.request;

import lombok.Data;

@Data
public class VocabularyRequest {
    private Integer languageId;
    private String key;
    private String meaning;
}
