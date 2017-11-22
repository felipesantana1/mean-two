import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { NewComponent } from './new/new.component'

const routes: Routes = [
  {path:"", pathMatch:"full", component:LoginComponent},
  {path:"dash", pathMatch:"full", component:DashComponent},
  {path:"new", pathMatch:"full", component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
