import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  user = new Subject()

  createUser(model:any) {
    return this.http.post(environment.baseApi+'students' , model)
  }

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }


}