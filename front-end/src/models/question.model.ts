import { Answer } from "./answer.model";

export class Question{
    public id:string = "";
    public name:string = "";
    public questionLevel:string="HARD";
    // public questionLevel:any;
    public category:string = "";
    public mark:number = 0;
    public time:number = 0;
    public correctAnswerIds:number[] =[];
    public answers:Answer[] = [];
    public createdBy:string="";
    public createdAt:string="";

    // "id": "64635c552f59404d03f2ad8a",
    // "name": "Q7",
    // "questionLevel": "LOW",
    // "category": "category",
    // "mark": 3.14,
    // "time": null,
    // "correctAnswerIds": [
    //     1,
    //     2
    // ],
    // "createdBy": "David",
    // "createdAt": "Mon",
    // "answers": null

}
