import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ParamS } from '../param-s';
import { Sql } from '../service/sql.service';
import { CommonService } from '../service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  public user = {};
  userdata: any;
  mobile: any;
  password: any;

  constructor(
    public FB: FormBuilder,
    public auth: AuthService,
    private alertCtrl: AlertController,
    private sql: Sql,
    public paaram: ParamS,
    private route: Router,
    private commonService: CommonService
  ) {
    this.loginForm = this.FB.group({
      mobile: ['7777901836', Validators.required],
      password: ['test@123', Validators.required]
    })
    this.userdata = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {
  }

  login() {

    this.sql.get('deviceToken').then((response) => {
      this.sendData(response);
    });
  }

  sendData(deviceToken) {
    let userDetails = Object.assign({}, this.user, this.loginForm.value, { 'device_token': deviceToken });
    this.auth.login(userDetails).subscribe((data:any) => {
      if (data) {
        console.log(data['token'], JSON.stringify(data['customer']))
        // this.sql.set('isLoggedIn', 'true');
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('token', data.token);
        // this.sql.set('token', data['token']);
        // this.sql.set('customer', JSON.stringify(data['customer']));
        this.route.navigate(['tabs']);
      }
      (err) => {
        console.log(err)
      }
    });
  }


  async showError(text) {
    const alert = await this.alertCtrl.create({
      header: 'Fail',
      subHeader: text,
      buttons: ['OK']
    });

    await alert.present();
  }

}
