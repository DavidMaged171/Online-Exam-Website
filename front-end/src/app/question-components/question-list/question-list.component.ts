import { QuestionController } from '../../../controllers/question.controller';
import { Component, OnInit, Output } from '@angular/core';
import { Question } from '../../../models/question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: Question[] = [];
  constructor(private _questionController:QuestionController, private _activatedRoute:ActivatedRoute)
  { }
  ngOnInit()
  {
    this.getAllQuestions();
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
  public deleteQuestion()
  {
    let question:Question=new Question();
      this._activatedRoute.paramMap.subscribe(params=>{
        question.id+=params.get("questionId");
    });
    let response= this._questionController.deleteQuestionById(question.id);
    if(response==="Deleted Successfully")
    {
      let router:Router=new Router();
      //router.parent.navigate(['/About']);

      router.navigate([QuestionListComponent]);
    }
  }
}
