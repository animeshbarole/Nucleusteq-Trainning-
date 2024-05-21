package com.nucleusTeq.quizApp.controllers;


import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;




@RestController
@RequestMapping("/api/v1/categories")

public class CategoryController {

      @Autowired
      private CategoryRepository categoryRepository;

      @PostMapping
      public ResponseEntity<Category> createCategory(@RequestBody Category category){

          Category savedCategory = categoryRepository.save(category);
          return  ResponseEntity.ok(savedCategory);
      }

     @GetMapping("/")
     public ResponseEntity<List<Category>> getCategory() {

       Iterable<Category> categories = categoryRepository.findAll();
       List<Category> listOFCategories = new ArrayList<>();

       for(Category item : categories)
       {
           listOFCategories.add(item);
       }

        return  ResponseEntity.ok(listOFCategories);

     }

}
