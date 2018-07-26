import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./listofusers";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url: 'api/listofusers';
  user:User[];

  constructor(
    private http: HttpClient
  ) { }

  getuser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

}
