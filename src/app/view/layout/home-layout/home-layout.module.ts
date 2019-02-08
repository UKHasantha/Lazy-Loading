import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';
import { HomeLayoutComponent } from './view/home-layout.component';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule
  ]
})
export class HomeLayoutModule { }
