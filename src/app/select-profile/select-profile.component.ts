import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/behavior.service';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.css']
})
export class SelectProfileComponent implements OnInit {

  fname:string="";
  lname:string="";
  email:string="";
  users:User[]
  
  checkids:Array<number>=[];
  constructor(private route:ActivatedRoute,private dataservice:DataService,private getService:GetService, private router:Router) { }

  ngOnInit(): void {
    this.getuserdetails();
  }

  getuserdetails(){
    this.route.data.subscribe(  
      (data:{users:User[]})=>{
        this.users=data.users;
        console.log(this.users);
        
      }
    )
  }

 

 
  

}
