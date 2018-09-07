import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { CommonService } from '../../service/common-service.service';
import { AuthService } from '../../service/auth.service';
import { ParamS } from '../../param-s';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {

  addressForm: FormGroup;
  loadTemplate: boolean = false;
  address: any = {};
  data: any;
  
  constructor(
    // private navParams: ParamS,
    private navParams: NavParams,
    private _addressService: AuthService,
    private viewCtrl: ModalController,
    private _commonService: CommonService,
    private FB: FormBuilder) {
    // this.address = this.navParams.address;
    this.address = this.navParams.get('address');
    this.addressFormDetails();
    this.addressForm.patchValue(this.address);
  }

  ngOnInit() {
  }

  addressFormDetails() {
    this.addressForm = this.FB.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(3)]],
      pincode: [, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      type: [, Validators.required],
    });
  }

  update() {
    this._commonService.presentLoading();
    let addressDetails = Object.assign({}, this.address, this.addressForm.value);
    this._addressService.updateProfile(addressDetails).subscribe((data) => {
      this._commonService.dismissLoading();
      this.data = data;
      if (this.data) {
        this._commonService.toast(this.data);
        this.viewCtrl.dismiss();
      }

    }, (err) => {
      // console.log(err);
    });
  }

}
