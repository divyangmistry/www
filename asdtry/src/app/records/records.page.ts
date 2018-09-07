import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { CommonService } from '../service/common-service.service';
import { AddRecordsPage } from './add-records/add-records.page';
import { ViewRecordsPage } from './view-records/view-records.page';
import { ParamS } from '../param-s';
import { Router, Params } from '@angular/router';
import { Sql } from '../service/sql.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage {

  list: any = [];

  constructor(
    private medicalRecordsService: AuthService,
    private modalController: ModalController,
    public alertCtrl: AlertController,
    public commonService: CommonService,
    private navCtrl: NavController,
    public route: Router,
    // private sql: Sql,
    private params: ParamS,
  ) { }

  ionViewWillEnter() {
    debugger
    this.medicalRecordsService.getRecords().subscribe(
      (res) => {
        this.list = res
      })
  }

  add() {
    this.navCtrl.navigateForward('addRecords');
    // const addModal = await this.modalController.create({
    //   component: AddRecordsPage,
    // });
    // await addModal.present();
    // await addModal.onDidDismiss(() => {
    //   this.ionViewWillEnter();
    // });
  }

  async select(data) {
    let viewModal = await this.modalController.create({
      component: ViewRecordsPage,
      componentProps: { record: data },
    });
    viewModal.onDidDismiss(() => {
      this.ionViewWillEnter();
    });
    await viewModal.present();
  }

  async delete(record) {
    let deleteCart = await this.alertCtrl.create({
      header: "Are you sure want to delete ?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.medicalRecordsService.deleteRecords(record).subscribe((res) => {
              this.ionViewWillEnter();
            });
          }
        },
        {
          text: "No",
          handler: () => {
          }
        }
      ]
    });
    await deleteCart.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
