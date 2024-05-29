package com.nucleusTeq.quizApp.repositories;

import com.nucleusTeq.quizApp.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {




}
