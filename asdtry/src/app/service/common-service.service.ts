import { Injectable } from "@angular/core";
import { LoadingController, ToastController, App } from "@ionic/angular";


@Injectable()
export class CommonService {
  loading:any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ){
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      // content: "Please wait..."
    });

    this.loading.onDidDismiss(() => {
    });

    this.loading.present();
  }

  dismissLoading() {
    this.loading.dismiss();
  }

  async toast(msg: string) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

}