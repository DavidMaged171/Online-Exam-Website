package com.example.ExamEngineService.models;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "question-bank",url = "localhost:8000")
public interface QuestionBankProxy {
    @GetMapping("/question/findById/{id}")
    public Question retrieveQuestionValue(@PathVariable String id);
}
