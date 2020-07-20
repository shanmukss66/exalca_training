import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { EditProfileComponent } from '../select-profile/edit-profile/edit-profile.component';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn:"root"
})

export class GetService{
    constructor(private http:HttpClient,private route:ActivatedRoute){

    }
     getUsers():Observable<any>{
        return this.http.get("http://localhost:52416/api/home/");
     }
     getUser(email):Observable<any>{
      return this.http.get("http://localhost:52416/api/home/"+email);
   }
     
     getUserbyId(id):Observable<any>
     {
        return this.http.get("http://localhost:52416/api/home/"+id);
     }

    

     addUser(data:any):Observable<any> {
       console.log(JSON.parse(data));
      
     return this.http.post<any>("http://localhost:52416/api/home" ,JSON.parse(data) ,{
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
 
     } );
     }
     deleteUser(data){
       return this.http.delete<any>("http://localhost:52416/api/home/"+data)
     }

     updateUser(data , id){
       console.log(JSON.parse(data));
       
        return this.http.put<any>("http://localhost:52416/api/home/"+id, JSON.parse(data) ,{
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
    
        } );
     }
     
}