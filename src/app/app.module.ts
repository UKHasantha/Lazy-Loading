import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './service/auth-service/auth.guard';
import { AuthService } from './service/auth-service/auth.service';
import { Studentservice } from './service/studentservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Coursservice } from './service/coursservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    Studentservice,
    Coursservice
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
