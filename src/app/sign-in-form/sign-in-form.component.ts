import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators}  from '@angular/forms'
  import { from } from 'rxjs';

import { JsonPipe } from '@angular/common';
import {Router} from  '@angular/router';
import { GetService } from '../services/get.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  reactive_signin= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
   details=new User();
  constructor(private router:Router,private getService:GetService) { }

  status_hide=true;
  success_hide=true;
  
  ngOnInit(): void {}

  onclickSubmit(){
    
    this.getService.getUser(this.reactive_signin.get('email').value).subscribe((data:User)=>{
      this.details=data;

     console.log(this.details);
     if(this.reactive_signin.get('email').value=== (this.details.email) && this.reactive_signin.get('password').value===(this.details.password) )
     {
       this.success_hide=false;
       this.status_hide=true;
      this.router.navigate(['/home']);
     }
     else{
      this.success_hide=true;
      this.status_hide=false;
  
     }
})
  

}
}
