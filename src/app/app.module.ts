import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { from } from 'rxjs';

const appRoutes:Routes=[{path:'regform' , component:RegFormComponent},{path:'signin',component:SignInFormComponent},{path:'',redirectTo:"/regform",pathMatch:'full'}]

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
