package com.example.ExamEngineMicroservice.controllers;

import com.example.ExamEngineMicroservice.models.ExamDefinition;
import com.example.ExamEngineMicroservice.services.ExamDefinitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/exam/examdefinition")
public class ExamInstanceController {
    @Autowired
    ExamDefinitionService service;

    @PostMapping("/createxamdefinition")
    public ExamDefinition createExamDefinition(@RequestBody ExamDefinition definition)
    {
        System.out.println(definition);
        return service.createExamDefinition(definition);
    }
}
