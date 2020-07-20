import {Resolve, ActivatedRouteSnapshot , RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {Injectable, OnInit} from '@angular/core';
import { Observable, empty } from 'rxjs';
import { GetService } from 'src/app/services/get.service';
import {userdetails} from 'src/app/models/usersdetails.model';
import { take, mergeMap, catchError, filter } from 'rxjs/operators'
import { User } from '../models/user.model';
import { EditProfileComponent } from '../select-profile/edit-profile/edit-profile.component';
@Injectable({
    providedIn:"root"
})
export class ResolverPhotos implements OnInit{
param;
constructor(private getservice: GetService, private router: ActivatedRoute){


}
ngOnInit(): void{
    
   
 

}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
   
        
    
    return this.getservice.getUserbyId(parseInt(route.paramMap.get('id'))).pipe(
       
        catchError((error) => {
            return empty();
        })

    )
    
}




}