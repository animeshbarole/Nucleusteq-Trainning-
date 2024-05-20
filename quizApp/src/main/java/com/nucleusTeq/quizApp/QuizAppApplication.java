package com.nucleusTeq.quizApp;

import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class QuizAppApplication {

	public static void main(String[] args) {

	  ApplicationContext context = SpringApplication.run(QuizAppApplication.class, args);

		CategoryRepository categoryRepository =context.getBean(CategoryRepository.class);

		Category category = new Category();
		category.setCategoryName("G.K");
		Category category1 = categoryRepository.save(category);

		System.out.println(category1);

	}

}
