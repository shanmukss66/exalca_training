import { Component, OnInit, Input } from '@angular/core';
import { userdetails } from '../models/usersdetails.model';
import { ActivatedRoute } from '@angular/router';
import { postphoto } from '../models/photo.model';
import { home } from '../models/home.model';
import { DataService } from '../services/behavior.service'

import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { GetService } from '../services/get.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: userdetails[];
  photos: postphoto[];
  mydata: home;
  fname: string="";
  lname: string="";
  email: string="";
  phone: string="";
  state: string="";
  city:string="";
  

  constructor(private route: ActivatedRoute, private dataservice: DataService,private getService:GetService) {

  }

  ngOnInit(): void {
    
    this.dataservice.data.subscribe((data1:User) => {
      console.log(data1);
    if(data1!=null){
      this.fname= data1.fname; 
      this.lname=data1.lname;
      this.email=data1.email;
      this.phone=data1.phone;
      this.state=data1.selected_state;
      this.city=data1.selected_city;
    }
    })

  }

  






}
