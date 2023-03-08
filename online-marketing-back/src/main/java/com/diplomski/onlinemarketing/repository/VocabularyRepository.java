package com.diplomski.onlinemarketing.repository;

import com.diplomski.onlinemarketing.entity.Vocabulary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VocabularyRepository extends JpaRepository<Vocabulary, Integer> {
}
