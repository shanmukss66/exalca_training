import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialdetailsComponent } from './socialdetails/socialdetails.component';


const routes: Routes = [{path: 'social', component: SocialdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [SocialdetailsComponent]
