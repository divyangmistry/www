import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sql } from '../providers/sql';
import { ApiCallsService } from '../providers/api-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  loginForm: FormGroup;

  constructor(
    private FB: FormBuilder,
    private sql: Sql,
    private service: ApiCallsService,
    private route: Router
  ) {
    this.loginForm = this.FB.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    debugger
    let userDetails = Object.assign({}, this.loginForm.value, { 'device_token': '123cvfght' });
    this.service.postData(userDetails).subscribe(
      (res: any) => {
        console.log(res);
        this.sql.set('token', res['token']);
        this.sql.set('isLogin', 'true');
        this.service.authToken = res.token;
        this.sql.set('user', JSON.stringify(res['customer']));
        this.route.navigateByUrl('');
      })
  }

}
