package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.entity.Visit;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.VisitRepository;
import com.diplomski.onlinemarketing.service.AddService;
import com.diplomski.onlinemarketing.service.StoreService;
import com.diplomski.onlinemarketing.service.VisitService;
import com.diplomski.onlinemarketing.service.WebSocketService;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
public class VisitServiceImpl implements VisitService {
    private final VisitRepository repository;
    private final AddService addService;
    private final StoreService storeService;
    private final WebSocketService webSocketService;

    public VisitServiceImpl(VisitRepository repository, AddService addService, StoreService storeService, WebSocketService webSocketService) {
        this.repository = repository;
        this.addService = addService;
        this.storeService = storeService;
        this.webSocketService = webSocketService;
    }

    @Override
    public void newAddVisit(Integer addId) throws RestException {
        Add add = addService.getById(addId);
        Visit visit = new Visit();
        visit.setDate(Date.valueOf(LocalDate.now()));
        visit.setAdd(add);
        visit = repository.saveAndFlush(visit);
        webSocketService.sendNewAddStatisticMessage(add.getStore().getId(), visit);
    }

    @Override
    public void newStoreVisit(Integer storeId) throws RestException {
        Store store = storeService.getById(storeId);
        Visit visit = new Visit();
        visit.setDate(Date.valueOf(LocalDate.now()));
        visit.setStore(store);
        visit = repository.saveAndFlush(visit);
        webSocketService.sendNewStoreStatisticMessage(storeId, visit);
    }
}
