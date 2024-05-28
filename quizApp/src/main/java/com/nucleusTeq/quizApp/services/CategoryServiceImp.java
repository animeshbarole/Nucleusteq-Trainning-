package com.nucleusTeq.quizApp.services;


import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

        return  categoryRepository.save(category);
    }

    @Override
    public List<Category> getCategories(){

        Iterable<Category> categories = categoryRepository.findAll();
        List<Category> result = new ArrayList<>();

        for(Category item : categories)
        {
            result.add(item);
        }
        return  result;
    }

}
