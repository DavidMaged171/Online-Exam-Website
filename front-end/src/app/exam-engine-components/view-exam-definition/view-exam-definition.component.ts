import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamDefinitionController } from 'src/controllers/exam-definition.controller';
import { QuestionController } from 'src/controllers/question.controller';
import { ExamDefinition } from 'src/models/exam-definition.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-view-exam-definition',
  templateUrl: './view-exam-definition.component.html',
  styleUrls: ['./view-exam-definition.component.css']
})
export class ViewExamDefinitionComponent implements OnInit {
  constructor( private _activatedRoute:ActivatedRoute,
    private _formBuilder:FormBuilder,
    private _examDefinitionController:ExamDefinitionController,
    private _questionController:QuestionController,
    private _router: Router){}

  examDefinition:ExamDefinition=new ExamDefinition();
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.examDefinition.id+=params.get("examId");
  });
    this.getAllQuestions();
    this.getExamDefinitionById();
    this.createQuestionForm();
  }
  questionList: Question[] = [];
  Qid:Set<string>=new Set;
  public addExamForm: any;

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
  public updateExamDefinition()
  {
    this.Qid=new Set();
    this.checkSelectedQuestions();
    if(this.Qid.size<4)
    {
      alert("Exam must contain at least 4 Questions");
      return;
    }
    else{
      this.examDefinition.questionsIds=Array.from(this.Qid.values());
    }
    this._examDefinitionController.updateExamDefinition(this.examDefinition);
    this._router.navigate(['/examDefinition']);
  }
  getExamDefinitionById()
  {
    this._examDefinitionController.getExamDefinitionById(this.examDefinition.id).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.examDefinition.questionsIds=resultData.questionsIds;
          this.examDefinition.id = resultData.id;
          this.examDefinition.name = resultData.name;
          this.examDefinition.passingScore=resultData.passingScore;
          console.log(this.examDefinition.questionsIds);
          this.setSelectedQuestions(this.examDefinition.questionsIds);
        }
      }
    },
      (error: any) => { });
  }
  setSelectedQuestions(questionsIds:string[])
  {
    let checkBoxes=document.getElementsByName('selectedQuestions') as NodeListOf<HTMLInputElement>;
    for (var i=0;i<questionsIds.length;i++)
    {
      let qId=questionsIds[i];

      for(var g=0;g<this.questionList.length;g++)
      {
        if(qId===this.questionList[g].id){
          checkBoxes[g].checked=true;
        }
      }
    }
  }
}
