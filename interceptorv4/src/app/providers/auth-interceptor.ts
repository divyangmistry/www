import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { Sql } from './sql';
import { ApiCallsService } from './api-calls.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    token: any;
    request: any;

    constructor(
        private sql: Sql,
        private authHttp: ApiCallsService,
    ) {
    }

    getToken() {
        debugger
        var promise = new promise((resolve, reject) => {
            this.sql.get('token').then((res) => {
                if (res) {
                    this.token = res;
                    resolve(console.log('c'));
                } else {
                    reject(console.log('d'));
                }
            })
        })
        return promise;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        return this.getToken().then(
            (res) => {
                this.request = req.clone({
                    headers: req.headers.append('Authorization', 'Bearer ' + res)
                });
                console.log('a')
                return next.handle(this.request);
            },
            (err) => {
                console.log('b')
            }
        )

    }

}
