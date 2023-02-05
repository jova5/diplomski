package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VisitRepository extends JpaRepository<Visit, Integer> {
    List<Visit> findAllByStore_Id(Integer storeId);
    List<Visit> findAllByAdd_Id(Integer addId);
}
