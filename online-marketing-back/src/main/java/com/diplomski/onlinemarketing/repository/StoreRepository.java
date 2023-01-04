package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
}
