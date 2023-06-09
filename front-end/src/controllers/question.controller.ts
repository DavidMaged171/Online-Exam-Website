import { QuestionService } from './../services/question.service';
import { environment } from "src/environments/environment.development";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/models/question.model';
var apiUrl = environment.questionApiUrl;
var httpLink = {
  getAllQuestions: apiUrl + "/question/all",
  deleteQuestionById: apiUrl + "/question/delete",
  getQuestionDetailById: apiUrl + "/question/findById",
  saveQuestion: apiUrl + "/question/create",
  updateQuestion:apiUrl+"/question/update"
  }
@Injectable({
    providedIn: 'root'
})
export class QuestionController
{
  constructor(private questionService: QuestionService) { }

  // public getAllQuestions(): Question[] {

  //   return this.questionService.getAllQuestions(httpLink.getAllQuestions);
  //   console.log("HERE");
  // }
  public getAllQuestions(): Observable<any> {
    return this.questionService.get(httpLink.getAllQuestions);
  }
  public deleteQuestionById(id: any): any {
    return this.questionService.delete(httpLink.deleteQuestionById + '/' + id);
  }
  public getQuestionDetailById(model: any): Observable<any> {
    return this.questionService.get(httpLink.getQuestionDetailById + '/' + model);
  }
  public saveQuestion(question: Question): void {
    return this.questionService.addQuestion(httpLink.saveQuestion, question);
  }
  public updateQuestion(question :Question):any{
    return this.questionService.updateQuestion(httpLink.updateQuestion,question);
  }
}
