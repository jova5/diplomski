package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends JpaRepository<Email, Integer> {
}
