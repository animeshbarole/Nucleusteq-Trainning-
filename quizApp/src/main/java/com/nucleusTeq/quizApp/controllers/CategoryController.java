package com.nucleusTeq.quizApp.controllers;


import com.nucleusTeq.quizApp.entities.Category;

import com.nucleusTeq.quizApp.services.CategoryServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;




@RestController
@RequestMapping("/api/v1/categories")

public class CategoryController {

      @Autowired
      private CategoryServiceImp categoryService;

      @PostMapping
      public ResponseEntity<Category> createCategory(@RequestBody Category category){

          Category savedCategory = categoryService.createCategory(category);
          return  ResponseEntity.ok(savedCategory);
      }

     @GetMapping("/")
     public ResponseEntity<List<Category>> getCategory() {

          List<Category> categories = categoryService.getCategories();

          return  ResponseEntity.ok(categories);

     }

}
