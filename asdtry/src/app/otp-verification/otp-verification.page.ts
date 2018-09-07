import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ParamS } from '../param-s';
// import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  mobile: any;
  placedata: {};
  // otpVerifyForm: FormGroup;
  resMssg: any;
  OTP: number;

  constructor(
    // public FB: FormBuilder,
    public service: AuthService,
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public paramService: ParamS
  ) {

    // this.otpVerifyForm = this.FB.group({
    //   otp: ['', Validators.required]
    // })
   
    this.resMssg = this.paramService.res;
    this.mobile = this.paramService.mobile;
  }

  ngOnInit() {
  }

  submitOtp() {
    this.placedata = {
      mobile: this.mobile,
      otp: this.OTP
    }

    this.service.verifyOtp(this.placedata).subscribe((date) =>
      this.route.navigateByUrl('home')
    ), (err) => { console.log(err) }
  }

}
