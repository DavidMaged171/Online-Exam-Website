import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExamDefinitionController } from 'src/controllers/exam-definition.controller';
import { QuestionController } from 'src/controllers/question.controller';
import { ExamDefinition } from 'src/models/exam-definition.model';
import { Question } from 'src/models/question.model';
@Component({
  selector: 'app-add-exam-definition',
  templateUrl: './add-exam-definition.component.html',
  styleUrls: ['./add-exam-definition.component.css']
})
export class AddExamDefinitionComponent implements OnInit {
  questionList: Question[] = [];
  examDefinition:ExamDefinition=new ExamDefinition;
  Qid:Set<string>=new Set;
  public addExamForm: any;
  constructor(private _formBuilder:FormBuilder,
    private _questionController:QuestionController,
    private _examDefinitionController:ExamDefinitionController){}
  ngOnInit(){

    this.getAllQuestions();
    this.createQuestionForm();
  }

  createQuestionForm(){
    this.addExamForm=this._formBuilder.group({
      examName:["Exam Name",[Validators.required,Validators.maxLength(100),Validators.minLength(5)]],
      examPassingScore:["1",[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(50)]],
    });
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
  checkSelectedQuestions()
  {
    this.Qid=new Set();
    let checkBoxes=document.getElementsByName('selectedQuestions') as NodeListOf<HTMLInputElement>;
    for (var i=0;i<checkBoxes.length;i++)
    {
      if(checkBoxes[i].checked)
      {
        this.Qid.add(this.questionList[i].id);
      }
    }
  }
  public addExamDefinition()
  {
    this.checkSelectedQuestions();
    if(this.Qid.size<4)
    {
      alert("Exam must contain at least 4 Questions");
      return;
    }
    else{
      this.examDefinition.questionsIds=Array.from(this.Qid.values());
    }
    console.log(this.examDefinition);
    this._examDefinitionController.saveExamDefinition(this.examDefinition);
  }
}
