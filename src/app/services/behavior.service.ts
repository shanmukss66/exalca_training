import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {home} from 'src/app/models/home.model';



@Injectable({
    providedIn:"root"
})
export class DataService {

  dataSource ;
  data ;

  constructor() { }

  loadvalue(value){
   this.dataSource = new BehaviorSubject<home>(value);
   this.data= this.dataSource.asObservable();
  }

  updatedDataSelection(data:home){
    return this.dataSource.next(data);
  }
  
}   