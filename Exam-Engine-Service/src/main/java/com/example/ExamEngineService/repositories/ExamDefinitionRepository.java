package com.example.ExamEngineService.repositories;

import com.example.ExamEngineService.models.ExamDefinition;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamDefinitionRepository extends MongoRepository<ExamDefinition,String> {

}
