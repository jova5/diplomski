package com.diplomski.onlinemarketing.service;

import com.diplomski.onlinemarketing.dto.other.VisitDTO;
import com.diplomski.onlinemarketing.exception.RestException;

import java.util.List;

public interface VisitService {
    void newAddVisit(Integer id) throws RestException;

    void newStoreVisit(Integer id) throws RestException;

    List<VisitDTO> findAllByStoreId(Integer id);

    List<VisitDTO> findAllAddsVisitsByStoreId(Integer id) throws RestException;
}
