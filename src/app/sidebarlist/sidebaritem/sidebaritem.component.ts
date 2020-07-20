import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/behavior.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebaritem',
  templateUrl: './sidebaritem.component.html',
  styleUrls: ['./sidebaritem.component.css']
})
export class SidebaritemComponent implements OnInit {
  @Input() user:User;
  @Output() myoutput: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {
  }
  onclicknavigate() {

    
    
    this.dataservice.updatedDataSelection(this.user);
  }

}
