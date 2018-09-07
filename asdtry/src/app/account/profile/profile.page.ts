import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from '../../service/common-service.service';
import { AuthService } from '../../service/auth.service';
import { ModalController } from '@ionic/angular';
import { Token } from '@angular/compiler';
import { Sql } from '../../service/sql.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  profileForm: FormGroup;
  // public loadTemplate: boolean = false;
  public profile: any = {
  };
  name: any;
  email: any;
  mobile: any;

  constructor(
    // private formBuilder: FormBuilder,
    private _loginService: AuthService,
    private _commonService: CommonService,
    private viewCtrl: ModalController,
    private sql: Sql
  ) {
 
    this.profileForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'mobile':new FormControl(null,Validators.required),
    });
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   mobile: ['', Validators.required]
    // })
    this.getData();

  }
  
  ionViewWillEnter() {
    // this.getData();
    // this.loadTemplate = true;
  }

  getData() {
    this.sql.get('customer').then((data) => {
      // localStorage.getItem()
      this.name = JSON.parse(data).name
      this.email = JSON.parse(data).email
      this.mobile = JSON.parse(data).mobile
      this.profileForm.patchValue({ mobile:this.mobile, name:this.name, email:this.email });
    }) 
  }

  update() {
    let profileDetails = Object.assign({}, this.profile, this.profileForm.value);
    this._loginService.updateProfile(profileDetails).subscribe((data) => {
      if (data) {
      }
    }, (err) => {
    });
  }

}
