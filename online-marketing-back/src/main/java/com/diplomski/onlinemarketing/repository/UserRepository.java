package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNameAndPassword(String username, String password);
}
