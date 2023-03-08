package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.CategoryRequest;
import com.diplomski.onlinemarketing.dto.response.CategoryResponse;
import com.diplomski.onlinemarketing.entity.Category;
import com.diplomski.onlinemarketing.service.CategoryService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryController extends GenericController<CategoryResponse, CategoryRequest, Category, Integer> {
    private final CategoryService service;

    public CategoryController(CategoryService service) {
        super(service);
        this.service = service;
    }
}
