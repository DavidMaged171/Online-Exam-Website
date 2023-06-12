import { environment } from "src/environments/environment.development";
import { Injectable } from '@angular/core';
import { ExamDefinition } from 'src/models/exam-definition.model';
import { Observable } from 'rxjs';
import { ExamDefinitionService } from 'src/services/exam-definition.service';
var apiUrl = environment.examDefinitionApiUrl;
var httpLink = {
  getAllExamDefinitions: apiUrl + "/all",
  deleteExamDefinitionById: apiUrl + "/delete",
  getExamDefinitionDetailById: apiUrl + "/findById",
  saveExamDefinition: apiUrl + "/create",
  updateExamDefinition:apiUrl+"/update"
  }
@Injectable({
    providedIn: 'root'
})

export class ExamDefinitionController{
  constructor(private examDefinitionService:ExamDefinitionService){}
  public saveExamDefinition(examDefinition: ExamDefinition): void {
    return this.examDefinitionService.addExamDefinition(httpLink.saveExamDefinition, examDefinition);
  }
  public getAllExamDefinitions(): Observable<any> {
    return this.examDefinitionService.get(httpLink.getAllExamDefinitions);
  }
  public getExamDefinitionById(model: any): Observable<any> {
    return this.examDefinitionService.get(httpLink.getExamDefinitionDetailById + '/' + model);
  }
  public updateExamDefinition(examDefinition:ExamDefinition):any
  {
    return this.examDefinitionService.updateExamDefinition(httpLink.updateExamDefinition,examDefinition);
  }
  // public updateQuestion(question :Question):any{
  //   return this.questionService.updateQuestion(httpLink.updateQuestion,question);
  // }
}

