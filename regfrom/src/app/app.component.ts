import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regfrom';
  
  firstname:string="";
  lastname:string="";
  myrock;
  
 constructor(private router:Router){

 }
  myobjects = {
    key1 : this.firstname,
    key2 : this.lastname}
    
    onclick(){
      this.myrock=this.myobjects;
      this.router.navigate(['/social']);
      
      }
     

}

 