import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  state=['TAMILNADU','ANDHRAPRADESH'];
  andhra_city=['VIJAYWADA','KAKINADA','VISHAKPATNAM','RAJAMUNDRY'];
  tamil_city=['CHENNAI','COIMBATORE','SALEM'];
  selectedstate;
  fname_hide=true;
  lname_hide=true;
  email_hide=true;
  phone_hide=true;
  pass_hide=true;
  conpass_hide=true;
  state_hide=true;
  city_hide=true;
  pass_match=true;
  select_hide=true;
  
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

 onclickSubmit(regdata){
     if(regdata.fname!=""){
      this.fname_hide=true;
      localStorage.setItem('fname' , regdata.fname);
      
     }
     else{
      this.fname_hide=false;
      
     }
     if(regdata.lname!=""){
      this.lname_hide=true;
      localStorage.setItem('lname' , regdata.lname);
     }
     else{
      this.lname_hide=false;
      
     }
     if(regdata.email!=""){
       this.email_hide=true;
       localStorage.setItem('email' , regdata.email);
     }
     else{
       this.email_hide=false;
       
     }
     if(regdata.phone!=""){
       this.phone_hide=true;
       localStorage.setItem('phone' , regdata.phone);
     }
     else{
       this.phone_hide=false;
       
     }
     if(regdata.password!=regdata.con_password){
    
       this.pass_match=false;
       
     }
     else{
      this.pass_match=true;
      localStorage.setItem('password' , regdata.password);
     }
     if(regdata.con_password!=""){
       this.conpass_hide==true;
     }
     else{
       this.conpass_hide=false;

     }
     if(regdata.password!=""){
      this.pass_hide==true;
    }
    else{
      this.pass_hide=false;
    }

    if(regdata.selected_state==="state" || regdata.selected_state===""){
     this.select_hide=false;
    }else{
      this.select_hide=true;
      localStorage.setItem('state' , regdata.selected_state);
    }
    if(regdata.selected_city==="city" || regdata.selected_city===""){
      this.select_hide=false;
     }else{
       this.select_hide=true;
       localStorage.setItem('city' , regdata.selected_city);

     }


     
 }

}
