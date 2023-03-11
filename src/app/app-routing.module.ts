import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateClassComponent } from './mentor/create-class/create-class.component';
import { ChooseTopicComponent } from './student/choose-topic/choose-topic.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'topic', component: ChooseTopicComponent },
  { path: 'expertise', component: CreateClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
