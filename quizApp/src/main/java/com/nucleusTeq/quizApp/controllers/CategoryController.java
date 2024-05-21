package com.nucleusTeq.quizApp.controllers;


import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
