package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Integer> {
}
