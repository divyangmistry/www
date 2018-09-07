import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Sql } from './sql.service';
import { TokenService } from './token.service';
import { ParamS } from '../param-s';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  LOGIN_URL = 'https://lyfcheck-api.webelight.co.in/api/v1/';

  private authToken: any;

  constructor(
    public http: HttpClient,
    public sql: Sql,
    public token: TokenService,
    public params: ParamS,
  ) {
    this.sql.get('token').then((data) => {
      this.authToken = data;
      console.log(this.authToken, ' b');
      return this.authToken;
    });
    // this.authToken = this.token.gotToken();
    this.authToken = this.params.token;
    console.log(this.params.token, 'inside Service !!')
  }

  login(data) {
    return this.http.post(this.LOGIN_URL + "login", data)
      .pipe(
        map((res: Response) => {

          return res;
        })
      );
  }

  register(data) {
    return this.http.post(this.LOGIN_URL + "users/signup", data)
      .pipe(
        map((res: Response) => {

          return res;
        }),
        catchError((err) => {
          return err;
        })
      );
  }

  verifyOtp(data) {
    return this.http.post(this.LOGIN_URL + "users/verify-signup-otp", data)
      .pipe(
        map((response: Response) => { return response.json() })
      )
  }

  getProfile() {
    debugger
    return this.http.get(this.LOGIN_URL + "users/profile").pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err) => {
        console.log(err)
        return err;
      })
    );
  }

  updateProfile(data) {
    return this.http.put(this.LOGIN_URL + "users/update-profile", data).pipe(
      map((res: Response) => {
        return res;
      }), catchError((err) => {
        return err;
      })
    );
  }

  addAddress(data) {
    return this.http.post(this.LOGIN_URL + "customers/address", data,{ headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.authToken) }).pipe(
      map((res: Response) => {
        return res;
      }), catchError((err) => {
        return err;
      })
    );
  }

  getAddress() {
    console.log( this.authToken, 'inside get address !')
    return this.http.get(this.LOGIN_URL + "customers/get-addresses", { headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.authToken) }).pipe(
      map((res: Response) => {
        return (res);
      }), catchError((err) => {
        return (err);
      })
    );
  }

  updateAddress(data) {
    console.log( this.authToken, 'inside update address !')
    return this.http.put(this.LOGIN_URL + "customers/address/" + data.id, data, { headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.authToken) }).pipe(
      map((res: Response) => {
        return res;
      }), catchError((err) => {
        return (err);
      })
    );
  }

  deleteAddress(id) {
    return this.http.delete(this.LOGIN_URL + "customers/address/" + id).pipe(
      map((res: Response) => {
        return res;
      }), catchError((err) => {
        return (err);
      })
    );
  }

  getRecords() {
    console.log(this.authToken, ' inside get Records')
    console.log(this.token.gotToken(), ' c');
    console.log(this.params.token , ' from params')
    return this.http.get(this.LOGIN_URL + "medical-records/get-all-records", { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authToken) }).pipe(
      map((res: Response) => {
        // let data = res.json();
        return res;
      }), catchError((err) => {
        return (err);
      })
    );
  }

  deleteRecords(record) {
    return this.http.delete(this.LOGIN_URL + "medical-records/" + record.id).pipe(
      map((res: Response) => {
        return res;
      }), catchError((err) => {
        return (err);
      })
    );
  }
}
