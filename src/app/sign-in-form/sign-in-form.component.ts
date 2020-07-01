import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor() { }

  status_hide=true;
  success_hide=true;

  ngOnInit(): void {}

  onclickSubmit(data){
     if(localStorage.getItem('password')===data.password && localStorage.getItem('email')===data.email) {
       this.status_hide=true;
       this.success_hide=false;
     }
     else{
       this.status_hide=false;
       this.success_hide=true;
     }
  }

}
