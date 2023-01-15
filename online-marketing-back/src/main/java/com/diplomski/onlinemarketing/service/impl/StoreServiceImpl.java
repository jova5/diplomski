package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Contact;
import com.diplomski.onlinemarketing.entity.Email;
import com.diplomski.onlinemarketing.entity.Phone;
import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.StoreRepository;
import com.diplomski.onlinemarketing.service.ContactService;
import com.diplomski.onlinemarketing.service.EmailService;
import com.diplomski.onlinemarketing.service.PhoneService;
import com.diplomski.onlinemarketing.service.StoreService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class StoreServiceImpl extends GenericServiceImpl<Store, Integer> implements StoreService {
    private final StoreRepository repository;
    private final EmailService emailService;
    private final PhoneService phoneService;
    private final ContactService contactService;

    public StoreServiceImpl(StoreRepository repository, EmailService emailService, PhoneService phoneService, ContactService contactService) {
        super(repository);
        this.repository = repository;
        this.emailService = emailService;
        this.phoneService = phoneService;
        this.contactService = contactService;
    }

    @Override
    public Boolean deleteCustom(Integer id) throws RestException {
        Store store = repository.findById(id)
                .orElseThrow(() -> new RestException("Could not find store with id: " + id, HttpStatus.BAD_REQUEST));
        Collection<Contact> contacts = store.getContacts();
        for (Contact contact : contacts){
            Collection<Email> emails = contact.getEmails();
            for (Email email: emails){
                emailService.delete(email.getId());
            }
            Collection<Phone> phones = contact.getPhones();
            for (Phone phone: phones){
                phoneService.delete(phone.getId());
            }
            contactService.delete(contact.getId());
        }
        repository.deleteById(store.getId());
        return true;
    }
}
