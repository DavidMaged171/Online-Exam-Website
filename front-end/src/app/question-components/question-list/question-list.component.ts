import { QuestionController } from '../../../controllers/question.controller';
import { Component, OnInit, Output } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: Question[] = [];
  constructor(private _questionController:QuestionController)
  { }
  ngOnInit()
  {
    this.getAllQuestions();
    console.log("questionList component")
  }

async getAllQuestions() {
    this._questionController.getAllQuestions().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.questionList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.questionList = [];
            }
          }
        }
      });
  }
}
