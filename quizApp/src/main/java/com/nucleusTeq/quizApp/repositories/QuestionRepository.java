package com.nucleusTeq.quizApp.repositories;


import com.nucleusTeq.quizApp.entities.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Questions,Integer> {

}
