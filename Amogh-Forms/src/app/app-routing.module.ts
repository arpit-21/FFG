import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formbeginner1Component } from './formbeginner1/formbeginner1.component';

const routes: Routes = [{
  path:'formbeginner0', component: Formbeginner1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
