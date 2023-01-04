package com.diplomski.onlinemarketing.dto.response;

import lombok.Data;

import java.util.Collection;

@Data
public class CategoryResponse {
    private Integer id;
    private String name;
    private String image;
    private Collection<SubcategoryResponse> subcategories;
}
