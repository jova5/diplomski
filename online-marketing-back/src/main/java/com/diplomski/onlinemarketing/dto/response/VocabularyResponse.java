package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

@Data
public class VocabularyResponse {
    private Integer id;
    private Integer languageId;
    private String key;
    private String meaning;
}
