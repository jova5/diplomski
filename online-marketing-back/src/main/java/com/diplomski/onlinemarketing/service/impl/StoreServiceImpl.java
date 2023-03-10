package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.dto.response.StoreWSResponse;
import com.diplomski.onlinemarketing.entity.*;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.StoreRepository;
import com.diplomski.onlinemarketing.service.*;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class StoreServiceImpl extends GenericServiceImpl<Store, Integer> implements StoreService {
    private final StoreRepository repository;
    private final EmailService emailService;
    private final PhoneService phoneService;
    private final ContactService contactService;
    private final WebSocketService webSocketService;
    private final AddService addService;
    private final UserService userService;
    private final ModelMapper modelMapper;

    public StoreServiceImpl(StoreRepository repository, EmailService emailService, PhoneService phoneService, ContactService contactService, WebSocketService webSocketService, AddService addService, UserService userService, ModelMapper modelMapper) {
        super(repository);
        this.repository = repository;
        this.emailService = emailService;
        this.phoneService = phoneService;
        this.contactService = contactService;
        this.webSocketService = webSocketService;
        this.addService = addService;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    public Boolean deleteCustom(Integer id) throws RestException {
        Store store = repository.findById(id)
                .orElseThrow(() -> new RestException("Could not find store with id: " + id, HttpStatus.BAD_REQUEST));
        Collection<Contact> contacts = store.getContacts();
        for (Contact contact : contacts) {
            Collection<Email> emails = contact.getEmails();
            for (Email email : emails) {
                emailService.delete(email.getId());
            }
            Collection<Phone> phones = contact.getPhones();
            for (Phone phone : phones) {
                phoneService.delete(phone.getId());
            }
            contactService.delete(contact.getId());
        }
        Collection<Add> adds = store.getAdds();
        for (Add add : adds) {
            addService.delete(add.getId());
        }

        try {
            User user = userService.findUserByStoreId(id);
            user.setStore(null);
            userService.update(user.getId(), user);
        } catch (Exception ignored) {
        }

        repository.deleteById(store.getId());
        return true;
    }

    @Transactional
    @Override
    public void addNewRating(Integer id, Integer grade) throws RestException {
        Store store = repository.findById(id).orElseThrow(
                () -> new RestException("Could not find store with id: " + id, HttpStatus.NOT_FOUND));
        store.setNumOfRating(store.getNumOfRating() + 1);
        store.setSumOfRating(store.getSumOfRating() + grade);
        store = repository.saveAndFlush(store);
        webSocketService.sendNewStoreRatingMessage(id, modelMapper.map(store, StoreWSResponse.class));
    }
}
