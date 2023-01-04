package com.diplomski.onlinemarketing.controller;

import com.diplomski.onlinemarketing.controller.generic.GenericController;
import com.diplomski.onlinemarketing.dto.request.SubcategoryRequest;
import com.diplomski.onlinemarketing.dto.response.SubcategoryResponse;
import com.diplomski.onlinemarketing.entity.Subcategory;
import com.diplomski.onlinemarketing.service.SubcategoryService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/subcategory")
public class SubcategoryController extends GenericController<SubcategoryResponse, SubcategoryRequest, Subcategory, Integer> {
    private final SubcategoryService service;

    public SubcategoryController(SubcategoryService service) {
        super(service);
        this.service = service;
    }
}
