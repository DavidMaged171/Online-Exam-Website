import { Component, OnInit } from '@angular/core';
import { ExamDefinitionController } from 'src/controllers/exam-definition.controller';
import { ExamDefinition } from 'src/models/exam-definition.model';

@Component({
  selector: 'app-exam-definition-list',
  templateUrl: './exam-definition-list.component.html',
  styleUrls: ['./exam-definition-list.component.css']
})
export class ExamDefinitionListComponent implements OnInit {
  constructor(private _examDefinitionController:ExamDefinitionController ){}
  examDefinitionList:ExamDefinition[]=[];
  ngOnInit(): void {
    this.getAllExamDefinitions();
  }
  async getAllExamDefinitions() {
    this._examDefinitionController.getAllExamDefinitions().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.examDefinitionList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.examDefinitionList = [];
            }
          }
        }
      });
  }
}
