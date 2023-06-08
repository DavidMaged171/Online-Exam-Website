import { Component, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer=new Answer;
  public addAnswerForm: any;

  ngOnInit()
  {}
@Output() validateAnswers() {
  // console.log("validateAnswers");
      let isValid:number=-1;
      const roles = document.getElementsByName("correct_ans") as NodeListOf<HTMLInputElement>;
      for (var i = 0; i < roles.length; i++) {
        if(roles[i].checked==true){
            isValid=i;
            // console.log(roles[i].checked);
        }
      }
      return isValid;
  }
}
