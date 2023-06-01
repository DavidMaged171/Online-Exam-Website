package com.example.ExamEngineService.services;

import com.example.ExamEngineService.models.ExamDefinition;
import com.example.ExamEngineService.models.Question;
import com.example.ExamEngineService.models.QuestionBankProxy;
import com.example.ExamEngineService.repositories.ExamDefinitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ExamDefinitionService {
    @Autowired
    private QuestionBankProxy questionBankProxy;

    @Autowired
    ExamDefinitionRepository examDefinitionRepository;
    public ExamDefinition createExamDefinition(ExamDefinition examDefinition)
    {
        Set<String>questionsIds=new HashSet<>();
        for(String id:examDefinition.getQuestionsIds())
        {
            if(isQuestionIdValid(id))questionsIds.add(id);
        }
        examDefinition.setQuestionsIds(questionsIds);
        return examDefinitionRepository.save(examDefinition);
    }
    public ExamDefinition getExamDefinition(String id)
    {
        if(examDefinitionRepository.existsById(id))
            return examDefinitionRepository.findById(id).get();
        else return null;
    }
    public String updateExamDefinition(ExamDefinition examDefinition)
    {
        if(examDefinitionRepository.existsById(examDefinition.getId()))
        {
            Set<String>questionsIds=new HashSet<>();
            for(String id:examDefinition.getQuestionsIds())
            {
                if(isQuestionIdValid(id))questionsIds.add(id);
            }
            examDefinition.setQuestionsIds(questionsIds);
            examDefinitionRepository.save(examDefinition);
            return "Updated Successfully";
        }
        return "Exam Definition ID not Found";
    }
    public String deleteExamDefinition(String id)
    {
        if(examDefinitionRepository.existsById(id))
        {
            examDefinitionRepository.deleteById(id);
            return "Deleted Successfully";
        }
        else return "ID not found";
    }
    private boolean isQuestionIdValid(String id)
    {
        Question question=questionBankProxy.retrieveQuestionValue(id);
        if(question==null)return false;
        if(question.getId().equals(id)){
            return true;
        }
        return false;
    }
}
