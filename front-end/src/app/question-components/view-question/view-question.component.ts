import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionController } from 'src/controllers/question.controller';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  question:Question=new Question;
  constructor(private _questionController:QuestionController, private _activatedRoute:ActivatedRoute)
  { }
  ngOnInit()
  {
    this._activatedRoute.paramMap.subscribe(params=>{
        this.question.id+=params.get("questionId");
    });
    // console.log(this.question.id);
    this.getQuestionDetailById();
  }
  getQuestionDetailById()
  {
    this._questionController.getQuestionDetailById(this.question.id).subscribe((data: any) => {
      if (data != null && data.body != null) {

        var resultData = data.body;
        console.log(resultData);
        if (resultData) {
          this.question.id = resultData.id;
          this.question.name = resultData.name;
          this.question.category=resultData.category;
          this.question.questionLevel=resultData.questionLevel;
          this.question.mark=resultData.mark;
          this.question.time=resultData.time;
          this.question.answers=resultData.answers;
        }
      }
    },
      (error: any) => { });
  }
}
