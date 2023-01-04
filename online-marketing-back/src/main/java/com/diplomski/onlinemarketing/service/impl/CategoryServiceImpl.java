package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Category;
import com.diplomski.onlinemarketing.repository.CategoryRepository;
import com.diplomski.onlinemarketing.service.CategoryService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl extends GenericServiceImpl<Category, Integer> implements CategoryService {
    private final CategoryRepository repository;

    public CategoryServiceImpl(CategoryRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
