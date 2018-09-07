import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ParamS } from '../param-s';
import { CommonService } from '../service/common-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  public user = {
    device_token: '123vghtfh'
  };

  constructor(
    public FB: FormBuilder,
    public auth: AuthService,
    public toast: ToastService,
    public route: Router,
    public navCtrl: NavController,
    public paaram: ParamS,
    public common: CommonService
  ) {
    this.signupForm = this.FB.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signup() {
    let userDetails = Object.assign({}, this.user, this.signupForm.value);
    this.auth.register(userDetails).subscribe(data => {
      this.paaram.mobile = this.signupForm.controls.mobile.value;
      this.paaram.res = data;
      this.toast.signupToast();
      this.route.navigateByUrl('otpVerification');
    },
      (err) => {
        let error = err.json();
        console.log(error);
        this.common.toast(error.message);
      });
  }

}
