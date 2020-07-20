import {Resolve, ActivatedRouteSnapshot , RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable, empty } from 'rxjs';
import { GetService } from 'src/app/services/get.service';
import {userdetails} from 'src/app/models/usersdetails.model';
import { take, mergeMap, catchError, filter } from 'rxjs/operators'
import { User } from '../models/user.model';
@Injectable({
    providedIn:"root"
})
export class Resolver{

constructor(private getservice: GetService, private route: ActivatedRoute){


}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {

    return this.getservice.getUsers().pipe(
       
        catchError((error) => {
            return empty();
        })

    )
    
}


}