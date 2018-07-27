import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./listofusers";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url = 'api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]>{
    console.log(this.url);
    return this.http.get<User[]>(this.url, httpOptions)
  }

  addUsers(user: User):Observable<User>{
    console.log(user);
    return this.http.post<User>(this.url, user, httpOptions)
  }

  updateUsers(user: User){
    console.log('updated list')
    return this.http.put<User>(this.url, User)
  }
  
}
