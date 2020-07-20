import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { userdetails } from '../models/usersdetails.model';
import {DataService} from '../services/behavior.service'
import { ActivatedRoute } from '@angular/router';
import {postphoto} from '../models/photo.model';
import { User } from '../models/user.model';


@Component({
  selector: 'app-sidebarlist',
  templateUrl: './sidebarlist.component.html',
  styleUrls: ['./sidebarlist.component.css']
})
export class SidebarlistComponent implements OnInit {
  
  users:User[];
    photos:postphoto[];
    userdetail_id;
    complete_detail={};
   @Output() myoutputdata:EventEmitter<any> =new EventEmitter();
   
  constructor(private route:ActivatedRoute,private dataservice:DataService) { }

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
