import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import {ApiServiceService} from "./api-service.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
