import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/behavior.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetService } from '../services/get.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {

  fname:string="";
  lname:string="";
  email:string="";
  users:User[]
  
  checkids:Array<number>=[];
  constructor(private route:ActivatedRoute,private dataservice:DataService,private getService:GetService) { }

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

  onClickDelete(){
    
    console.log(this.checkids);
     this.checkids.forEach(p => {
     this.getService.deleteUser(p).subscribe();
     
      
    });

    
    window.location.reload();
    
    
    
    
  }
  onChange(id:number, isChecked: boolean){
    if(isChecked) {
      this.checkids.push(id);
    } else {
      let index = this.checkids.indexOf(id);
      this.checkids.splice(index,1);
    }
  }

}
