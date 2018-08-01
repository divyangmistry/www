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
    // this.updateUsers(user);
    return this.http.post<User>(this.url, user, httpOptions)
  }

  deleteHero (user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  updateUsers(user: User){
    console.log(user)
    let url = `${this.url}/${user.id}`;
    return this.http.post<User>(url, user);
    return this.http.get<User[]>(url, httpOptions)
  }
  
}
