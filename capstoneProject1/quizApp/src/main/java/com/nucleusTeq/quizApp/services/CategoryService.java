package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Category;

import java.util.List;

public interface CategoryService {

    Category createCategory(Category category);
    List<Category> getCategories();
}
