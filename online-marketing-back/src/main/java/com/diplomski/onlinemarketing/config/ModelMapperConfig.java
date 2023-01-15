package com.diplomski.onlinemarketing.config;

import com.diplomski.onlinemarketing.dto.request.*;
import com.diplomski.onlinemarketing.entity.*;
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

//        modelMapper.typeMap(User.class, User.class)
//                .addMappings(mapper -> mapper.skip(User::setId));

        modelMapper.typeMap(VocabularyRequest.class, Vocabulary.class)
                .addMappings(mapper -> mapper.skip(Vocabulary::setId));

        modelMapper.typeMap(Vocabulary.class, Vocabulary.class)
                .addMappings(mapper -> mapper.skip(Vocabulary::setId));

        modelMapper.typeMap(Category.class, Category.class)
                .addMappings(mapper -> mapper.skip(Category::setId));

        modelMapper.typeMap(StoreRequest.class, Store.class)
                .addMappings(mapper -> mapper.skip(Store::setId));

        modelMapper.typeMap(Store.class, Store.class)
                .addMappings(mapper -> mapper.skip(Store::setId))
                .addMappings(mapper -> mapper.skip(Store::setNumOfRating))
                .addMappings(mapper -> mapper.skip(Store::setSumOfRating))
                .addMappings(mapper -> mapper.skip(Store::setAdds))
                .addMappings(mapper -> mapper.skip(Store::setContacts))
                .addMappings(mapper -> mapper.skip(Store::setCategories))
                .addMappings(mapper -> mapper.skip(Store::setVisits));

        modelMapper.typeMap(ContactRequest.class, Contact.class)
                .addMappings(mapper -> mapper.skip(Contact::setId));

//        modelMapper.typeMap(Contact.class, Contact.class)
//                .addMappings(mapper -> mapper.skip(Contact::setId));

//        modelMapper.typeMap(Contact.class, Contact.class)
//                .addMappings(mapper -> mapper.skip(Contact::setStore));

        modelMapper.typeMap(EmailRequest.class, Email.class)
                .addMappings(mapper -> mapper.skip(Email::setId));

//        modelMapper.typeMap(Email.class, Email.class)
//                .addMappings(mapper -> mapper.skip(Email::setId));

//        modelMapper.typeMap(Email.class, Email.class)
//                .addMappings(mapper -> mapper.skip(Email::setContact));

        modelMapper.typeMap(PhoneRequest.class, Phone.class)
                .addMappings(mapper -> mapper.skip(Phone::setId));

//        modelMapper.typeMap(Phone.class, Phone.class)
//                .addMappings(mapper -> mapper.skip(Phone::setId));

//        modelMapper.typeMap(Phone.class, Phone.class)
//                .addMappings(mapper -> mapper.skip(Phone::setContact));

        modelMapper.typeMap(AddRequest.class, Add.class)
                .addMappings(mapper -> mapper.skip(Add::setId));

        modelMapper.createTypeMap(User.class, User.class)
                .setConverter(ctx -> {
                    User src = ctx.getSource();
                    User dest = ctx.getDestination();
                    try {
                        dest.setId(dest.getId());
                        dest.setStore(src.getStore());
                        dest.setName(src.getName());
                        dest.setPassword(src.getPassword());
                        dest.setEmail(src.getEmail());
                        dest.setType(src.getType());
                    } catch (NullPointerException n) {
                        dest.setId(null);
                        dest.setStore(null);
                    }
                    return dest;
                });

        modelMapper.createTypeMap(Contact.class, Contact.class)
                .setConverter(ctx -> {
                    Contact src = ctx.getSource();
                    Contact dest = ctx.getDestination();
                    try {
                        dest.setId(dest.getId());
                        dest.setStore(dest.getStore());
                        dest.setEmails(dest.getEmails());
                        dest.setPhones(dest.getPhones());
                        dest.setAddress(src.getAddress());
                    } catch (NullPointerException n) {
                        dest.setId(null);
                        dest.setStore(null);
                    }
                    return dest;
                });

        modelMapper.createTypeMap(Email.class, Email.class)
                .setConverter(ctx -> {
                    Email src = ctx.getSource();
                    Email dest = ctx.getDestination();
                    try {
                        dest.setId(dest.getId());
                        dest.setContact(dest.getContact());
                        dest.setEmail(src.getEmail());
                    } catch (NullPointerException n) {
                        dest.setId(null);
                        dest.setContact(null);
                    }
                    return dest;
                });

        modelMapper.createTypeMap(Phone.class, Phone.class)
                .setConverter(ctx -> {
                    Phone src = ctx.getSource();
                    Phone dest = ctx.getDestination();
                    try {
                        dest.setId(dest.getId());
                        dest.setContact(dest.getContact());
                        dest.setNumber(src.getNumber());
                    } catch (NullPointerException n) {
                        dest.setId(null);
                        dest.setContact(null);
                    }
                    return dest;
                });

        modelMapper.createTypeMap(Add.class, Add.class)
                .setConverter(ctx -> {
                    Add src = ctx.getSource();
                    Add dest = ctx.getDestination();
                    try {
                        dest.setId(dest.getId());
                        dest.setImage(src.getImage());
                        dest.setHeader(src.getHeader());
                        dest.setDescription(src.getDescription());
                        dest.setPremium(src.getPremium());
                        dest.setStore(dest.getStore());
                    } catch (NullPointerException n) {
                        dest.setId(null);
                    }
                    return dest;
                });

        return modelMapper;
    }
}
