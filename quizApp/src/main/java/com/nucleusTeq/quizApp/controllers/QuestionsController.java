package com.nucleusTeq.quizApp.controllers;


import com.nucleusTeq.quizApp.entities.Questions;
import com.nucleusTeq.quizApp.services.QuestionServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {


    @Autowired
    private QuestionServiceImp questionService;

    @PostMapping
    public ResponseEntity<Questions> createQuestion(@RequestBody Questions question) {

        Questions savedQuestion = questionService.createQuestion(question);

        return ResponseEntity.ok(savedQuestion);


    }

    @GetMapping("/")
    public ResponseEntity<List<Questions>> getAllQuestions()
    {
        List<Questions> questions  =  questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }



    @GetMapping("/filter")

    public ResponseEntity<List<Questions>> getQuestionsByDifficultyAndCategory(
        @RequestParam(name="difficultyLevel") String difficultyLevel,
        @RequestParam(name="categoryId") long categoryId) {

        {
            List<Questions> questions = questionService.getQuestionsByDifficultyAndCategory(difficultyLevel, categoryId);

            return ResponseEntity.ok(questions);
        }


    }
}
