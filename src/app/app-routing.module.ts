import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforestartComponent } from './components/beforestart/beforestart.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", redirectTo:"welcome",pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"Start-quiz", component:BeforestartComponent},
  {path:"question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
