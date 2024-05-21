package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Questions;
import com.nucleusTeq.quizApp.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class QuestionServiceImp implements  QuestionService{

    @Autowired
    private QuestionRepository questionRepository;

    public Questions createQuestions(Questions question)
    {
        return questionRepository.save(question);
    }
}
