import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { GetService } from '../services/get.service';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  reactive= new FormGroup({
    fname: new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    
    phone: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    con_password:new FormControl('',Validators.required),
    selected_state:new FormControl(''),
    selected_city:new FormControl('')
  })

  constructor(private router:Router,private getService:GetService) { }

  ngOnInit(): void {
  }
  state=['TAMILNADU','ANDHRAPRADESH'];
  andhra_city=['VIJAYWADA','KAKINADA','VISHAKPATNAM','RAJAMUNDRY'];
  tamil_city=['CHENNAI','COIMBATORE','SALEM'];
  selectedstate;
 
  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    if(selectElementText === "TAMILNADU"){
    this.selectedstate= this.tamil_city;
    }
    else{
      this.selectedstate= this.andhra_city;
    }
 }

 onclickSubmit(){
     
  this.getService.addUser(JSON.stringify(this.reactive.value)).subscribe((data)=>{
    
   
   
 
    console.log(data);
    this.router.navigate(['/home']);
    
    
 })
    
    
     
 }

}
