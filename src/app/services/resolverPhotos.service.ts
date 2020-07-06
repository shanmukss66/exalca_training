import {Resolve, ActivatedRouteSnapshot , RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable, empty } from 'rxjs';
import { GetService } from 'src/app/services/get.service';
import {userdetails} from 'src/app/models/usersdetails.model';
import { take, mergeMap, catchError, filter } from 'rxjs/operators'
@Injectable({
    providedIn:"root"
})
export class ResolverPhotos{

constructor(private getservice: GetService, private route: ActivatedRoute){


}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<userdetails[]> {

    return this.getservice.getPhotos().pipe(
       
        catchError((error) => {
            return empty();
        })

    )
    
}


}