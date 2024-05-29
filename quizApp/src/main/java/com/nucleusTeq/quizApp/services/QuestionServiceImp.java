package com.nucleusTeq.quizApp.services;

import com.nucleusTeq.quizApp.entities.Category;
import com.nucleusTeq.quizApp.entities.Questions;
import com.nucleusTeq.quizApp.exception.InvalidParameterException;
import com.nucleusTeq.quizApp.exception.ResourceNotFoundException;
import com.nucleusTeq.quizApp.repositories.CategoryRepository;
import com.nucleusTeq.quizApp.exception.MissingParameterException;
import com.nucleusTeq.quizApp.repositories.QuestionRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class QuestionServiceImp implements  QuestionService{

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public  Questions createQuestion(Questions question)
    {
        try {
            return questionRepository.save(question);
        }catch (MissingParameterException ex)
        {
            String message = "Please Pass all Parameters ";
            throw  new MissingParameterException(message);
        }
    }
    @Override
    public List<Questions> createQuestions(List<Questions> questions)
    {

        return questionRepository.saveAll(questions);
    }



    @Override
    public List<Questions> getQuestionsByDifficultyAndCategory(String difficultyLevel, long categoryId) {

        if (StringUtils.isEmpty(difficultyLevel) || categoryId==0 ) {
            throw new MissingParameterException("Missing required parameters: difficultyLevel or categoryId");
        }


        if (!isValidDifficultyLevel(difficultyLevel)) {
            throw new InvalidParameterException("Invalid difficulty level provided: " + difficultyLevel);
        }



        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        if (optionalCategory.isEmpty()) {
            throw new ResourceNotFoundException("Category with ID " + categoryId + " not found");
        }

        List<Questions> questions = new ArrayList<>(questionRepository.findByDifficultyLevelAndCategory_Id(difficultyLevel, categoryId));

        return questions;
    }

    private boolean isValidDifficultyLevel(String difficultyLevel) {

        return difficultyLevel.equals("Easy") || difficultyLevel.equals("Medium") || difficultyLevel.equals("Hard");
    }
}



