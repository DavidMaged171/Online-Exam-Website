import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Question } from "src/models/question.model";
@Injectable({
  providedIn: 'root'
})
export class QuestionService{
  constructor(private _httpClient:HttpClient){}
  public addQuestion(url:string,question:Question)
  {
    this._httpClient.post( url,question)
    .subscribe(response=>{
      console.log(response);
    },error=>{
      console.log("Error .... : ",error);
    },()=>{
    });
  }
  public updateQuestion(url:string,question:Question)
  {
    this._httpClient.put( url,question)
    .subscribe(response=>{
      console.log(response);
    },error=>{
      console.log("Error .... : ",error);
    },()=>{
    });
  }
  public getAllQuestions(url:string):Question[]
  {
    let questionList: Question []=[];
    this._httpClient.get(url)
    .subscribe(response=>{

      questionList=response as Question[];
      console.log(questionList);
      console.log(questionList.length);
      console.log("response");
      return questionList;
    },error=>{
      alert("Error...\n Check URl")
      console.log("Error .... : ",error);
    },()=>{
    });
    return questionList;
  }
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      observe: "response" as 'body'
    };
    return this._httpClient.get(
      url,
      httpOptions
    )
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }
  public delete(url:string){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this._httpClient.delete(url,{ headers, responseType: 'text'})
    .subscribe(response=>{
      console.log(response);
      return response;
    },error=>{
      console.log("Error .... : ",error);
    },()=>{
    });
  }
  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(error);
  }
}
