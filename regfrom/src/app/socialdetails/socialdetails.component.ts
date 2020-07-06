import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socialdetails',
  templateUrl: './socialdetails.component.html',
  styleUrls: ['./socialdetails.component.css']
})
export class SocialdetailsComponent implements OnInit {

  @Input() mydetails;

  constructor() { }

  ngOnInit(): void {
  }

  

}
