import { Injectable } from '@angular/core';
import { Sql } from './sql.service';
import { ParamS } from '../param-s';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  authtoken: any;

  constructor(
    private sql: Sql,
    private params: ParamS
  ) { }

  gotToken() {
    // this.sql.get('token').then((data) => {
    //   console.log(data, ' Token.service');
    //   this.params.token = data;
    //   return data;
    // });
    return localStorage.getItem('token');
  }

}
