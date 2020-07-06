import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { userdetails } from '../models/usersdetails.model';
import {DataService} from '../services/behavior.service'
import { ActivatedRoute } from '@angular/router';
import {postphoto} from '../models/photo.model';


@Component({
  selector: 'app-sidebarlist',
  templateUrl: './sidebarlist.component.html',
  styleUrls: ['./sidebarlist.component.css']
})
export class SidebarlistComponent implements OnInit {
  
  users:userdetails[];
    photos:postphoto[];
    userdetail_id;
    complete_detail={};
   @Output() myoutputdata:EventEmitter<any> =new EventEmitter();
   
  constructor(private route:ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
    this.getuserdetails();
     this.getuserPhoto();
  }
  getuserdetails(){
    this.route.data.subscribe(
      (data:{users:any})=>{
        this.users=data.users;
        console.log(this.users);
        
      }
    )
  }
  getuserPhoto(){
    this.route.data.subscribe(
      (data:{photos:any})=>{
        this.photos=data.photos;
        console.log(this.photos);
        
      }
    )
  }
  reciever(data:any){
    this.complete_detail={ "name":this.users[data].name,
                          "username":this.users[data].username,
                          "email":this.users[data].email,
                          "phone":this.users[data].phone,
                          "website":this.users[data].website,
                          "photo":this.photos[data].thumbnailUrl
                        }
            this.dataservice.loadvalue(this.complete_detail)         
    this.myoutputdata.emit(this.complete_detail);    
         
  }

}
