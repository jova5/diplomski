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
                    Vocabulary dest = ctx.getDestination();
                    try {
                        dest.setId(null);
                    } catch (NullPointerException n) {
                        dest.setLanguage(null);
                    }
                    return dest;
                });
        return mapper;
    }
}
