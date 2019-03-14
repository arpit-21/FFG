import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formbeginner1Component } from './formbeginner1/formbeginner1.component';
import { Formbeginner0Component } from './formbeginner0/formbeginner0.component'

const routes: Routes = [
  {
    path: 'formbeginner0', component: Formbeginner0Component
  },
  {
    path: 'formbeginner1', component: Formbeginner1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
