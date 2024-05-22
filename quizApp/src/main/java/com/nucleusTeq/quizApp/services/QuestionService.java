package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Questions;

import java.util.List;

public interface QuestionService {

    Questions createQuestion(Questions question);

    List<Questions> getAllQuestions();

    List<Questions> getQuestionsByDifficultyAndCategory(String difficultyLevel, long categoryId);


}
