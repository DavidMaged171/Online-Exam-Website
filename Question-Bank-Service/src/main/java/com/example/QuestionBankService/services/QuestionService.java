package com.example.QuestionBankService.services;

import com.example.QuestionBankService.models.Question;
import com.example.QuestionBankService.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository repository;

    public Question createQuestion(Question question)
    {
        return repository.save(question);
    }
    public Optional<Question> getQuetionById(String id)
    {
        return repository.findById(id);
    }
    public List<Question> getAllQuetions()
    {
        return repository.findAll();
    }
    public String deleteQuestionById(String id)
    {
        repository.deleteById(id);
        return "Deleted Successfully";
    }
    public String deleteQuestion(Question question)
    {
        repository.delete(question);
        return "Deleted Successfully";
    }
    public String updateQuestion(Question question)
    {
        repository.save(question);
        return "Updated Successfully";
    }
}
