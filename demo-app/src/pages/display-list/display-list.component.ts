import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { lists, list } from "../list.service";
import { FormPage } from '../form/form.component';


@Component({
  selector: 'page-display-list',
  templateUrl: 'display-list.html',
})
export class DisplayListPage {

  lists: list[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public service: lists
  ) {
    this.lists = this.service.show();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  push() {
    this.navCtrl.push(FormPage);
  }

}