import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpTokenInterceptor} from "./services/interceptor/http-token.interceptor";
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {CodeInputModule} from "angular-code-input";
import {LoginComponent} from "./pages/login/login.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import bootstrap from "../main.server";



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule,
    AppComponent,
    LoginComponent,
    ActivateAccountComponent
  ],
  providers:[
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
