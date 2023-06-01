package com.example.ExamEngineService.controllers;

import com.example.ExamEngineService.models.ExamDefinition;
import com.example.ExamEngineService.services.ExamDefinitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/examDefinition")
public class ExamDefinitionController {
    @Autowired
    private ExamDefinitionService examDefinitionService;

    @PostMapping("/create")
    public ExamDefinition createExamDefinition(@RequestBody ExamDefinition examDefinition)
    {
        return examDefinitionService.createExamDefinition(examDefinition);
    }
    @PutMapping("/update")
    public String updateExamDefinition(@RequestBody ExamDefinition examDefinition)
    {
        return examDefinitionService.updateExamDefinition(examDefinition);
    }
    @GetMapping("/getById/{id}")
    public ExamDefinition getExamDefinition(@PathVariable String id)
    {
        return examDefinitionService.getExamDefinition(id);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteExamDefinition(@PathVariable String id)
    {
        return examDefinitionService.deleteExamDefinition(id);
    }

}
