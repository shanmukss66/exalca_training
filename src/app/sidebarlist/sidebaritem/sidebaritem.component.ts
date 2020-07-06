import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebaritem',
  templateUrl: './sidebaritem.component.html',
  styleUrls: ['./sidebaritem.component.css']
})
export class SidebaritemComponent implements OnInit {
  @Input() user;
  @Output()myoutput:EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   onclicknavigate(){
    
     this.myoutput.emit((this.user.id)-1);
   }

}
