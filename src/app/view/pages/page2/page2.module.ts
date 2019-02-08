import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './view/page2.component';
import { Page2RouterModule } from './page2-router.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    Page2RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Page2Module { }
