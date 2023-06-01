package com.example.ExamEngineService.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "exam-definition")
public class ExamDefinition {
    @Id
    private String id;
    private String name;
    private int passingScore;
    private Set<String> questionsIds;
}
