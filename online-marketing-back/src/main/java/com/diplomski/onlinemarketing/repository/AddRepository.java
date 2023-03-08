package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Add;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddRepository extends JpaRepository<Add, Integer> {
    List<Add> findAddByStore_Id(Integer storeId);
}
