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

const routs:Route[]=[
  {path:"question/create",component:AddQuestionComponent},
  {path:"question/update/:questionId",component:EditQuestionComponent},
  {path:"question/read/:questionId",component:ViewQuestionComponent},
  {path:"question/delete/:questionId",component:QuestionListComponent},
  {path:'questionList',component:QuestionListComponent},
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
