package com.diplomski.onlinemarketing.config;

import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.entity.Language;
import com.diplomski.onlinemarketing.entity.Vocabulary;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class ModelMapperConfig {
    public ModelMapperConfig() {
    }

    @Bean
    public ModelMapper getModelMapper() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setAmbiguityIgnored(true);

        mapper.createTypeMap(VocabularyRequest.class, Vocabulary.class)
                .setPostConverter(ctx -> {
                    VocabularyRequest source = ctx.getSource();
                    Vocabulary dest = ctx.getDestination();
                    Language language = new Language();
                    language.setId(source.getLanguageId());
                    try {
                        dest.setId(null);
                        dest.setLanguage(language);
                    } catch (NullPointerException n) {
                        dest.setLanguage(null);
                    }
                    return dest;
                });
        return mapper;
    }
}
