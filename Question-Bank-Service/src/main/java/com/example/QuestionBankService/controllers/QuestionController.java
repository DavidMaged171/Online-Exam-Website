package com.example.QuestionBankService.controllers;

import com.example.QuestionBankService.models.Question;
import com.example.QuestionBankService.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    QuestionService service;

    @PostMapping("/create")
    public HttpStatus createQuetions(@RequestBody Question question)
    {
        service.createQuestion(question);
        return HttpStatus.CREATED;
    }
    @GetMapping("/findById/{id}")
    public Optional<Question> getQuestionById(@PathVariable String id)
    {

        return service.getQuetionById(id);
    }
    @GetMapping("/all")
    public List<Question> getAllQuestions() {
        return service.getAllQuetions();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteQuestionById(@PathVariable String id)
    {
        return service.deleteQuestionById(id);
    }
    @DeleteMapping("/delete")
    public String deleteQuestion(@RequestBody Question question)
    {
        return service.deleteQuestion(question);
    }
    @PutMapping("/update")
    public String updateQuestion(@RequestBody Question question)
    {
        return service.updateQuestion(question);
    }
}
