// import { Injectable } from '@angular/core';
// import { RequestOptions, Response, Request, RequestOptionsArgs, Headers, Http } from "@angular/http";
// //import { Observable } from "rxjs";
// import { AuthHttp, AuthConfig } from "angular2-jwt";
// import { AuthService } from "./auth.service";
// import { CommonService } from './common-service.service'; 
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/operator/retry'; 
// @Injectable()
// export class AuthHttpInterceptor extends AuthHttp {
//   constructor(http: Http, defaultOptions: RequestOptions, private sql, private authService: AuthService, private commonService:CommonService) {
//     super(new AuthConfig({
//       tokenName: 'token',
//       tokenGetter: (() => sql.get('token')),
//       globalHeaders: [{'Content-Type': 'application/json'}],
//     }), http, defaultOptions)
//   }
//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     return this.intercept(super.request(url, options));
//   }
//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.intercept(super.get(url, options));
//   }
//   post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
//   }
//   put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
//   }
//   delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.intercept(super.delete(url, options));
//   }
//   private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
//     if (options == null) {
//       options = new RequestOptions();
//     }
//     if (options.headers == null) {
//       options.headers = new Headers();
//     }
//     options.headers.append('Content-Type', 'application/json');
//     return options;
//   }
//   private isUnauthorized(status: number): boolean {
//     return status === 0 || status === 401 || status === 403;
//   }
//   intercept(observable: Observable<Response>): Observable<Response> {
//    // this.commonService.dismissLoading();
//     return observable.catch((err, source) => {
//       if (err.message == "No JWT present or has expired" || err.message == "JWT must have 3 parts" || this.isUnauthorized(err.status)) {        
//         if (err instanceof Response) {
//           return Observable.throw(err.json().message || 'backend server error');
//         }
//         return Observable.empty();
//       } else {
//         return Observable.throw(err);
//       }
//     });
//   }
// }
//# sourceMappingURL=auth-http-interceptor.service.js.map