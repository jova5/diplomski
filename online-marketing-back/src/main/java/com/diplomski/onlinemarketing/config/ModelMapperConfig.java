package com.diplomski.onlinemarketing.config;

import com.diplomski.onlinemarketing.dto.request.UserRequest;
import com.diplomski.onlinemarketing.dto.request.VocabularyRequest;
import com.diplomski.onlinemarketing.entity.Language;
import com.diplomski.onlinemarketing.entity.User;
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
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);

        modelMapper.typeMap(UserRequest.class, User.class)
                .addMappings(mapper -> mapper.skip(User::setId));

        modelMapper.typeMap(User.class, User.class)
                .addMappings(mapper -> mapper.skip(User::setId));

        modelMapper.typeMap(VocabularyRequest.class, Vocabulary.class)
                .addMappings(mapper -> mapper.skip(Vocabulary::setId));

        modelMapper.typeMap(Vocabulary.class, Vocabulary.class)
                .addMappings(mapper -> mapper.skip(Vocabulary::setId));

//        modelMapper.createTypeMap(VocabularyRequest.class, Vocabulary.class)
//                .setPostConverter(ctx -> {
//                    Vocabulary dest = ctx.getDestination();
//                    try {
//                        dest.setId(null);
//                    } catch (NullPointerException n) {
//                        dest.setLanguage(null);
//                    }
//                    return dest;
//                });
        return modelMapper;
    }
}
