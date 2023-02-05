package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.exception.RestException;
import com.diplomski.onlinemarketing.service.VisitService;
import com.diplomski.onlinemarketing.service.WebSocketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/visit")
public class VisitController {
    private final VisitService service;
    private final WebSocketService webSocketService;

    public VisitController(VisitService service, WebSocketService webSocketService) {
        this.service = service;
        this.webSocketService = webSocketService;
    }

    @PutMapping("/add/{id}")
    public void newAddVisit(@PathVariable(name = "id") Integer id) throws RestException {
        service.newAddVisit(id);
    }

    @PutMapping("/store/{id}")
    public void newStoreVisit(@PathVariable(name = "id") Integer id) throws RestException {
        service.newStoreVisit(id);
    }

    @GetMapping("/store/{storeId}")
    public ResponseEntity<?> storeVisits(@PathVariable(name = "storeId") Integer id) {
        return ResponseEntity.ok(service.findAllByStoreId(id));
    }

    @GetMapping("/addsForStore/{storeId}")
    public ResponseEntity<?> addsForStore(@PathVariable(name = "storeId") Integer id) throws RestException {
        return ResponseEntity.ok(service.findAllAddsVisitsByStoreId(id));
    }
}
