package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
