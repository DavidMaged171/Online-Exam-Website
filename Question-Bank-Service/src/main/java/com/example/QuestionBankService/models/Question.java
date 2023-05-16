package com.example.QuestionBankService.models;

import com.example.QuestionBankService.enums.QuestionLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "question")
@AllArgsConstructor
@Getter
@Setter
public class Question {
    @Id
    //@Field(name = "_id")
    private String id;
    private String name;
    private QuestionLevel questionLevel;
    private String category;
    private Double mark;
    private Integer time;
    private List<Integer> correctAnswerIds;
    private String createdBy;
    private String createdAt;
    private List<Answer> answers;

}
