package com.nucleusTeq.quizApp.controllers;


import com.nucleusTeq.quizApp.entities.Questions;
import com.nucleusTeq.quizApp.services.QuestionServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {


    @Autowired
    private QuestionServiceImp questionService;

    @PostMapping
    public ResponseEntity<Questions> createQuestion(@RequestBody Questions question) {

        Questions savedQuestion = questionService.createQuestions(question);

        return ResponseEntity.ok(savedQuestion);


    }
}
