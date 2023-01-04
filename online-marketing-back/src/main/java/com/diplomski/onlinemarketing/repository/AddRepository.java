package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Add;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddRepository extends JpaRepository<Add, Integer> {
}
