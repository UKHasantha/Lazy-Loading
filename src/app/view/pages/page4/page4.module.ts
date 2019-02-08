import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page4RoutingModule } from './page4-routing.module';
import { Page4Component } from './view/page4/page4.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [Page4Component],
  imports: [
    CommonModule,
    Page4RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Page4Module { }
