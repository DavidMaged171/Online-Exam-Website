package com.example.QuestionBankService.repositories;

import com.example.QuestionBankService.models.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question,String> {

}
