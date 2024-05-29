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

    @PostMapping("/saveAll")
    public ResponseEntity<List<Questions>> createQuestions(@RequestBody List<Questions> questions) {

        List<Questions> savedQuestions = questionService.createQuestions(questions);

        return ResponseEntity.ok(savedQuestions);


    }


    @PostMapping("/save")
    public ResponseEntity<Questions>  createQuestion(@RequestBody Questions question)
    {
        Questions saveQuestion=  questionService.createQuestion(question);
        return  ResponseEntity.ok(saveQuestion);
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Questions>> getAllQuestions()
    {
        List<Questions> questions  =  questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    @CrossOrigin
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
