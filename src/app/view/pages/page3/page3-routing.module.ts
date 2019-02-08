import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3Component } from './view/page3/page3.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:"",
    component: Page3Component
  }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page3RoutingModule { }
