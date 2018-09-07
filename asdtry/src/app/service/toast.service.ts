import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async submitToast(){
    let toast = await this.toastCtrl.create({
      message: 'ok Cool you add one element to the List !',
      duration: 3000
    });
    await toast.present();
  }

  async signupToast(){
    let toast = await this.toastCtrl.create({
      message: 'You have Signed up Successfully !',
      duration: 3000
    });
    await toast.present();
  }

  async errorsignupToast(){
    let toast = await this.toastCtrl.create({
      message: 'Error while Signing you up !',
      duration: 3000
    });
    await toast.present();
  }

}
