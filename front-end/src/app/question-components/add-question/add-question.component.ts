import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Question } from '../../../models/question.model';
import { Answer } from 'src/models/answer.model';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { AnswerComponent } from '../../answer/answer.component';
import { QuestionController } from 'src/controllers/question.controller';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public question: Question = new Question();
  public qLevel:string[] = ['LOW' ,'MEDIUM', 'HARD'];
  @Input() answers:Answer[]=this.question.answers;
  @ViewChild(AnswerComponent) child:AnswerComponent= new AnswerComponent;
  public addQuestionForm: any;
  constructor(private _formBuilder:FormBuilder, private _questionController:QuestionController)
  { }
  ngOnInit()
  {
    this.createQuestionForm();
  }
  createQuestionForm(){
    this.addQuestionForm=this._formBuilder.group({
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
    //this.document.getElementById("question").value = "";
    //console.log(this.question.answers);
  }

  public setAnswersId()
  {
    for(var i=0;i<this.question.answers.length;i++)
    {
      this.question.answers[i].id=i+1;
    }
  }
  public saveQuestion()
  {

    if (this.question.answers.length<2)
    {
      alert("You must add at least two answers");
      return;
    }
    var res=this.child.validateAnswers()
   if(res===-1)
    {
      alert("You must select correct ans");
      return;
    }
    else
    {
      console.log(this.question);
      this.question.correctAnswerIds.push(res+1);
      this._questionController.saveQuestion(this.question);
    }

  }
}
