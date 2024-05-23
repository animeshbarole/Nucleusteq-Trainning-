package com.nucleusTeq.quizApp.repositories;


import com.nucleusTeq.quizApp.entities.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Questions,Long> {

    List<Questions> findByDifficultyLevelAndCategory_Id(String difficultyLevel, long categoryId);
}
