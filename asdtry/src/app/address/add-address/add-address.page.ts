import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AddressService } from '../../service/address.service';
import { ModalController } from '@ionic/angular';
import { CommonService } from '../../service/common-service.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  addressForm: FormGroup;
  address: any = {};
  data: any;
  
  constructor(
    private _addressService: AuthService,
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private _commonService: CommonService
  ) { 
    this.addressFormDetails();
  }

  ngOnInit() {
  }

  addressFormDetails() {
    this.addressForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(3)]],
      pincode: [, [Validators.required,Validators.pattern('^[0-9]+$') ,Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      type: ['', Validators.required],
    });
  }

  add() {
    console.log(this.addressForm.value)
    let addressDetails = Object.assign({}, this.address, this.addressForm.value);
    this._addressService.addAddress(addressDetails).subscribe((data) => {
      this.data = data;
      if (this.data) {
        // this._commonService.toast(this.data.description);
        this.modalCtrl.dismiss(null, undefined, null);
      }
    }, (err) => {
      debugger
      this.modalCtrl.dismiss(null, undefined, null);
      // console.log(err);
    });
  }

}
