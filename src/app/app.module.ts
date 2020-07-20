import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { Resolver } from 'src/app/services/resolver.service'
import { ResolverPhotos } from './services/resolverPhotos.service';
import { SidebarlistComponent } from './sidebarlist/sidebarlist.component';
import { SidebaritemComponent } from './sidebarlist/sidebaritem/sidebaritem.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { EditProfileComponent } from './select-profile/edit-profile/edit-profile.component';


const appRoutes: Routes = [{ path: 'regform', component: RegFormComponent }, 
{ path: 'signin', component: SignInFormComponent }, 
{ path: 'home', component: HomepageComponent, resolve: { users: Resolver} },
{path: 'show' , component:ShowCaseComponent, resolve: { users: Resolver} },
{path : 'select' , component:SelectProfileComponent,resolve:{users:Resolver}},
{path : 'edit/:id' , component:EditProfileComponent,resolve:{user:ResolverPhotos}}]

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    SignInFormComponent,
    NavTopComponent,
    HomepageComponent,
    SidebarlistComponent,
    SidebaritemComponent,
    ShowCaseComponent,
    SelectProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
