import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController, ModalController, ItemSliding, NavParams } from '@ionic/angular';
import { Address } from "./address.classes";
import { AddAddressPage } from './add-address/add-address.page';
import { ParamS } from '../param-s';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage {

  addressForm: FormGroup;
  prescriptions: Array<String> = [];
  pastPrescriptions: Array<String> = [];
  callVerification: any;
  medicines_remark: any;
  addresses: any = [];
  medicines: Array<any> = [];

  constructor(
    private route: Router,
    // private FB: FormBuilder,
    // private navCtrl: NavController,
    private navParams: ParamS,
    // private navParams: NavParams,
    public alertCtrl: AlertController,
    private addressService: AuthService,
    private modalCtrl: ModalController) {
      this.prescriptions = this.navParams.prescriptions;
    this.pastPrescriptions = this.navParams.pastPrescriptions;
    this.callVerification = this.navParams.callVerification;
    this.medicines_remark = this.navParams.medicines_remark;
    this.medicines = this.navParams.medicines;
    // this.prescriptions = this.navParams.get('prescriptions');
    // this.pastPrescriptions = this.navParams.get('pastPrescriptions');
    // this.callVerification = this.navParams.get('callVerification');
    // this.medicines_remark = this.navParams.get('medicines_remark');
    // this.medicines = this.navParams.get('medicines');
    this.getAddresses();
  }


  getAddresses() {
    this.addressService.getAddress().subscribe((data) => {
      this.addresses = data;
    });
  }

  async addAddressModal() {
    let modal = await this.modalCtrl.create({component: AddAddressPage});

    modal.onDidDismiss((data) => {
      this.getAddresses();
    });

    return await modal.present();
  }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

  reviewOrder() {
    this.route.navigateByUrl('reviewOrderPage')
  }


  selectAddress(address) {
    this.route.navigate(['reviewOrderPage', { 
      address: address, 
      prescriptions: this.prescriptions, 
      callVerification: this.callVerification, 
      medicines_remark: this.medicines_remark, 
      pastPrescriptions: this.pastPrescriptions, 
      medicines: this.medicines
    }]);
  }

}
