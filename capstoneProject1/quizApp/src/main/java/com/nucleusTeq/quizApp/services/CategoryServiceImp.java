package com.nucleusTeq.quizApp.services;


import com.nucleusTeq.quizApp.entities.Category;

import com.nucleusTeq.quizApp.exception.EmptyListException;
import com.nucleusTeq.quizApp.exception.MissingParameterException;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class CategoryServiceImp implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category)
    {
        if (category.getCategoryName() == null || category.getCategoryName().isEmpty()) {
            throw new MissingParameterException("Required parameter 'Category_name' is missing.");
        }

        try {
            return categoryRepository.save(category);
        } catch (DataIntegrityViolationException ex) {

            String message = "A category with the name '" + category.getCategoryName() + "' already exists.";
            throw new DataIntegrityViolationException(message);
        }
    }

    @Override
    public List<Category> getCategories(){


        List<Category> categories = new ArrayList<>(categoryRepository.findAll());

        if (categories.isEmpty()) {
            throw new EmptyListException("No categories found.");
        }

        return categories;
    }

}
