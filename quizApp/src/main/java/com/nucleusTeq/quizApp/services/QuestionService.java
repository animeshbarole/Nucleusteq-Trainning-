package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Questions;

import java.util.List;

public interface QuestionService {

    List<Questions> createQuestion(List<Questions> question);

    List<Questions> getAllQuestions();

    List<Questions> getQuestionsByDifficultyAndCategory(String difficultyLevel, long categoryId);


}
