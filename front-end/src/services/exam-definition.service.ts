import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { ExamDefinition } from "src/models/exam-definition.model";
@Injectable({
  providedIn: 'root'
})

export class ExamDefinitionService{
  constructor(private _httpClient:HttpClient){}

  public addExamDefinition(url:string,examDefinition:ExamDefinition)
  {
    this._httpClient.post( url,examDefinition)
    .subscribe(response=>{
      console.log(response);
    },error=>{
      console.log("Error .... : ",error);
    },()=>{
    });
  }
  // public getAllExamDefinitions(url:string):ExamDefinition[]
  // {
  //   let examDefinitionList: ExamDefinition []=[];
  //   this._httpClient.get(url)
  //   .subscribe(response=>{

  //     examDefinitionList=response as ExamDefinition[];
  //     console.log(examDefinitionList);
  //     console.log(examDefinitionList.length);
  //     console.log("response");
  //     return examDefinitionList;
  //   },error=>{
  //     alert("Error...\n Check URl")
  //     console.log("Error .... : ",error);
  //   },()=>{
  //   });
  //   return examDefinitionList;
  // }
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
  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(error);
  }
  public updateExamDefinition(url:string,examDefinition:ExamDefinition)
  {
    this._httpClient.put( url,examDefinition)
    .subscribe(response=>{
      console.log(response);
    },error=>{
      console.log("Error .... : ",error);
    },()=>{
    });
  }
}
