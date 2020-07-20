import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { home } from 'src/app/models/home.model';
import { User } from '../models/user.model';



@Injectable({
    providedIn: "root"
})
export class DataService {
    dataSource = new BehaviorSubject<any>(null);
    data = this.dataSource.asObservable();

    constructor() { }

    

    updatedDataSelection(userid) {
        return this.dataSource.next(userid);
    }

}   