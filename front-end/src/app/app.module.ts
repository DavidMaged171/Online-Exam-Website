import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-components/question-list/question-list.component';
import { AddQuestionComponent } from './question-components/add-question/add-question.component';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { Route, RouterModule } from '@angular/router';
import { EditQuestionComponent } from './question-components/edit-question/edit-question.component';
import { ViewQuestionComponent } from './question-components/view-question/view-question.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddExamDefinitionComponent } from './exam-engine-components/add-exam-definition/add-exam-definition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamDefinitionListComponent } from './exam-engine-components/exam-definition-list/exam-definition-list.component';
import { ViewExamDefinitionComponent } from './exam-engine-components/view-exam-definition/view-exam-definition.component';

const routs:Route[]=[
  {path:"question/create",component:AddQuestionComponent},
  {path:"question/update/:questionId",component:EditQuestionComponent},
  {path:"question/read/:questionId",component:ViewQuestionComponent},
  {path:"question/delete/:questionId",component:QuestionListComponent},
  {path:'questionList',component:QuestionListComponent},
  {path:"examDefinition/create",component:AddExamDefinitionComponent},
  {path:"examDefinition/view/:examId",component:ViewExamDefinitionComponent},
  {path:"examDefinition",component:ExamDefinitionListComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionComponent,
    AnswerComponent,
    HeaderComponent,
    EditQuestionComponent,
    ViewQuestionComponent,
    LoginComponent,
    RegisterComponent,
    AddExamDefinitionComponent,
    ExamDefinitionListComponent,
    ViewExamDefinitionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
