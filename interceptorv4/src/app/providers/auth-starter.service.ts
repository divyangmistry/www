import { Injectable } from '@angular/core';
import { Sql } from './sql';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AuthStarterService implements CanActivate {

  token: any;
  isLogin: any;
  constructor(
    private sql: Sql,
    private route: Router
  ) {
    this.sql.get('isLogin').then((data=>{
      this.isLogin = data;
    }))
    // this.getToken();
  }

  getToken(): boolean{
    return this.token !== null;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: import("/home/divyang/www/interceptorv4/node_modules/@angular/router/src/router_state").RouterStateSnapshot): boolean |
    import("/home/divyang/www/interceptorv4/node_modules/rxjs/internal/Observable").Observable<boolean> | Promise<boolean> {

    if (this.isLogin) {
      debugger
      this.route.navigateByUrl('')
      return true;
    } else {
      this.route.navigateByUrl('login');
      return false;
    }
  }

}
