package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.entity.Subcategory;
import com.diplomski.onlinemarketing.repository.SubcategoryRepository;
import com.diplomski.onlinemarketing.service.SubcategoryService;
import com.diplomski.onlinemarketing.service.generic.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class SubcategoryServiceImpl extends GenericServiceImpl<Subcategory, Integer> implements SubcategoryService {
    private final SubcategoryRepository repository;

    public SubcategoryServiceImpl(SubcategoryRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
