import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class GetService{
    constructor(private http:HttpClient){

    }
     getUsers():Observable<any>{
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/users");
     }
     getPhotos():Observable<any>
     {
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/photos");
     }
     
}