package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
