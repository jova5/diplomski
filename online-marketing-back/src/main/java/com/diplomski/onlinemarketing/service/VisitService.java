package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.exception.RestException;

public interface VisitService {
    void newAddVisit(Integer id) throws RestException;

    void newStoreVisit(Integer id) throws RestException;
}
