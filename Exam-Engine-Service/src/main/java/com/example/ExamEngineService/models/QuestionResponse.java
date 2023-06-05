package com.example.ExamEngineService.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Question {
    @Id
    private String id;
    private String name;
    private String questionLevel;
    private String category;
    private Double mark;
    private Integer time;
    private List<Integer> correctAnswerIds;
    private String createdBy;
    private String createdAt;
    private Set<Answer> answers;
}
