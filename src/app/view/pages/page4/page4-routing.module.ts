import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page4Component } from './view/page4/page4.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: Page4Component
  }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page4RoutingModule { }
