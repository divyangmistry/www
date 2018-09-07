import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Sql } from './sql';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  url = "https://lyfcheck-api.webelight.co.in/api/v1/";

  authToken: string;

  constructor(
    private http: HttpClient,
    private sql: Sql,
  ) {
    this.getToken();
    // this.authToken = localStorage.getItem('token');
    // let headers = new Headers();
    // headers = headers.set('Authorization', 'Bearer' + this.getToken())
  }

  getToken() {
    return this.sql.get('token').then((res) => {
      this.authToken = res;
      console.log(this.authToken + '  api-services')
      return this.authToken;
    })
  }

  update(data) {
    debugger
    return this.http.put(this.url + "users/update-profile", data, { headers: new HttpHeaders().set('Authorization', 'Bearer' + this.authToken) }).pipe(
      map((res: Response) => {
        // let data = res.json();
        return res;
      }),
      catchError((err) => {
        return err;
      })
    )
  }

  postData(data) {
    debugger
    return this.http.post(this.url + "login", data).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  getData() {
    debugger
    return this.http.get(this.url + "users/profile").pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return err;
      })
    )
  }

}
