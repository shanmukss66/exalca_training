import { Component, OnInit, Input } from '@angular/core';
import { userdetails } from '../models/usersdetails.model';
import { ActivatedRoute } from '@angular/router';
import {postphoto} from '../models/photo.model';
import {home} from '../models/home.model';
import {DataService} from '../services/behavior.service'

import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    users:userdetails[];
    photos:postphoto[];
   mydata:home;
   name:string="";
   username:string;
   email:string;
   phone:string;
   website:string;
   url:string;
  constructor(private route:ActivatedRoute,private dataservice:DataService) { 
    
  }

  ngOnInit(): void {
    
  }
  reciever(data:home){
    this.mydata=data;
    
    
     this.name=this.mydata.name;
     console.log(this.name);
     
     this.username=this.mydata.username;
     console.log(this.username);
     
     this.email=this.mydata.email;
     this.phone=this.mydata.phone;
     this.website = this.mydata.website;
     this.url=this.mydata.photo;  
     this.dataservice.data.subscribe(data1=>{
      console.log(data1);
      
    })
   
   }
   
  
    
  
  

}
