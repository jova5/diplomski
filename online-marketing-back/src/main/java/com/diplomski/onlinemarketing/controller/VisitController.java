package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.VisitService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/visit")
public class VisitController {
    private final VisitService service;

    public VisitController(VisitService service) {
        this.service = service;
    }

    @PutMapping("/add/{id}")
    public void newAddVisit(@PathVariable(name = "id") Integer id) throws RestException {
        service.newAddVisit(id);
    }

    @PutMapping("/store/{id}")
    public void newStoreVisit(@PathVariable(name = "id") Integer id) throws RestException {
        service.newStoreVisit(id);
    }
}
