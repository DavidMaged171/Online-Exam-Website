package com.example.QuestionBankService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories("com.example.QuestionBankService")
public class QuestionBankServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(QuestionBankServiceApplication.class, args);
	}
}
