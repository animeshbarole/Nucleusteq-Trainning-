package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.entities.Questions;
import com.nucleusTeq.quizApp.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class QuestionServiceImp implements  QuestionService{

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Questions> createQuestion(List<Questions> question)
    {
        return questionRepository.saveAll(question);
    }

    @Override
    public List<Questions> getAllQuestions()
    {
        Iterable<Questions> questions = questionRepository.findAll();
        List<Questions> result = new ArrayList<>();

        for(Questions item : questions)
        {
            result.add(item);
        }
        return  result;
    }

    @Override
    public List<Questions> getQuestionsByDifficultyAndCategory(String difficultyLevel, long categoryId) {


        Iterable<Questions> questions = questionRepository.findByDifficultyLevelAndCategory_Id(difficultyLevel, categoryId);
        List<Questions> result = new ArrayList<>();
        for(Questions item: questions)
        {
            result.add(item);
        }
        return result;
    }
}

