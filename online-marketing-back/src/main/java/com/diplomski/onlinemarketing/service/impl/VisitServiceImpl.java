package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.dto.other.VisitDTO;
import com.diplomski.onlinemarketing.entity.Add;
import com.diplomski.onlinemarketing.entity.Store;
import com.diplomski.onlinemarketing.entity.Visit;
import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.repository.VisitRepository;
import com.diplomski.onlinemarketing.service.AddService;
import com.diplomski.onlinemarketing.service.StoreService;
import com.diplomski.onlinemarketing.service.VisitService;
import com.diplomski.onlinemarketing.service.WebSocketService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class VisitServiceImpl implements VisitService {
    private final VisitRepository repository;
    private final AddService addService;
    private final StoreService storeService;
    private final WebSocketService webSocketService;
    private final ModelMapper modelMapper;

    public VisitServiceImpl(VisitRepository repository, AddService addService, StoreService storeService, WebSocketService webSocketService, ModelMapper modelMapper) {
        this.repository = repository;
        this.addService = addService;
        this.storeService = storeService;
        this.webSocketService = webSocketService;
        this.modelMapper = modelMapper;
    }

    @Override
    public void newAddVisit(Integer addId) throws RestException {
        Add add = addService.getById(addId);
        Visit visit = new Visit();
        visit.setDate(Date.valueOf(LocalDate.now()));
        visit.setAdd(add);
        visit = repository.saveAndFlush(visit);
        webSocketService.sendNewAddStatisticMessage(add.getStore().getId(), modelMapper.map(visit, VisitDTO.class));
    }

    @Override
    public void newStoreVisit(Integer storeId) throws RestException {
        Store store = storeService.getById(storeId);
        Visit visit = new Visit();
        visit.setDate(Date.valueOf(LocalDate.now()));
        visit.setStore(store);
        visit = repository.saveAndFlush(visit);
        webSocketService.sendNewStoreStatisticMessage(storeId, modelMapper.map(visit, VisitDTO.class));
    }

    @Override
    public List<VisitDTO> findAllByStoreId(Integer id) {
        List<Visit> list = repository.findAllByStore_Id(id);
        return list.stream().map(item -> modelMapper.map(item, VisitDTO.class)).toList();
    }

    @Override
    public List<VisitDTO> findAllAddsVisitsByStoreId(Integer id) throws RestException {
        Store store = storeService.getById(id);
        List<Add> adds = store.getAdds().stream().toList();
        List<Visit> list = new ArrayList<>();
        for (Add add: adds){
            list.addAll(repository.findAllByAdd_Id(add.getId()));
        }
        list.sort(Comparator.comparing(Visit::getDate));
        return list.stream().map(item -> modelMapper.map(item, VisitDTO.class)).toList();
    }
}
