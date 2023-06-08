import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path:'viewquestion/:questionId',component:ViewQuestionComponent},
  // {path:'addquestion',component:AddQuestionComponent},
  // {path:'editquestion/:questionId',component:EditQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
