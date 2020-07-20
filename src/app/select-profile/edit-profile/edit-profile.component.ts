import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/behavior.service';
import { GetService } from 'src/app/services/get.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  reactive = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),

    phone: new FormControl('', Validators.required),
    email: new FormControl('',),
    password: new FormControl('', Validators.required),
    con_password: new FormControl('', Validators.required),
    selected_state: new FormControl(''),
    selected_city: new FormControl('')
  })
  users: User
  param;
  disable_email = true;
  checkids: Array<number> = [];

  state = ['TAMILNADU', 'ANDHRAPRADESH'];
  andhra_city = ['VIJAYWADA', 'KAKINADA', 'VISHAKPATNAM', 'RAJAMUNDRY'];
  tamil_city = ['CHENNAI', 'COIMBATORE', 'SALEM'];
  selectedstate;

  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    if (selectElementText === "TAMILNADU") {
      this.selectedstate = this.tamil_city;
    }
    else {
      this.selectedstate = this.andhra_city;
    }
  }
  constructor(private route: ActivatedRoute, private dataservice: DataService, private getService: GetService, private router: Router) { }

  ngOnInit(): void {


    this.getuserdetails();


    this.reactive.setValue({
      fname: this.users.fname,
      lname: this.users.lname,
      phone: this.users.phone,
      email: this.users.email,
      password: this.users.password,
      con_password: this.users.con_password,
      selected_city: this.users.selected_city,
      selected_state: this.users.selected_state,

    })
  }

  getuserdetails() {
    this.route.data.subscribe(
      (data: { user: User }) => {
        this.users = data.user;
        console.log(this.users);

      }
    )
  }


  onclickSubmit() {
    this.getService.updateUser(JSON.stringify(this.reactive.value),this.users.id).subscribe((data) => {




      console.log(data);
      this.router.navigate(['/select']);
    })
  }}
