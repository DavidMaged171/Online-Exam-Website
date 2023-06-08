import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionController } from 'src/controllers/question.controller';
import { Answer } from 'src/models/answer.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit{
  public question:Question=new Question;
  public qLevel:string[] = ['LOW' ,'MEDIUM', 'HARD'];
  public editQuestionForm: any;
  constructor(private _formBuilder:FormBuilder,
    private _questionController:QuestionController, private _activatedRoute:ActivatedRoute)
  { }
  ngOnInit()
  {
    this._activatedRoute.paramMap.subscribe(params=>{
        this.question.id+=params.get("questionId");
    });
    this.createQuestionForm();
    this.getQuestionDetailById();
  }
  createQuestionForm(){
    this.editQuestionForm=this._formBuilder.group({
      questionName:["Question Name",[Validators.required,Validators.maxLength(300),Validators.minLength(10)]],
      questionCategory:["Question Category",[Validators.required,Validators.maxLength(300),Validators.minLength(10)]],
      questionMark:["1",[Validators.required,Validators.pattern("^[1-9]*$")]],
      questionTime:["5",[Validators.required,Validators.pattern("^[1-9]*$")]],
    });
  }
  addAnswer(name:string){
    if(name==="")
    {
      alert("Answer name can't be empty");
      return;
    }
    if(this.question.answers.length>5)
    {
      alert("Question can't has more than 5 answers");
      return;
    }
    let ans:Answer=new Answer();
    ans.name=name;
    this.question.answers.push(ans);
  }
  getQuestionDetailById() {
    this._questionController.getQuestionDetailById(this.question.id).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
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
  updateQuestion()
  {
    console.log(this._questionController.updateQuestion(this.question).subscribe(
      (_response: any)=>{
        console.log("response ..............");
        console.log(_response);
      }
    ));
  }
}
