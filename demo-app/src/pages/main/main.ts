import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

  }

  toTabPage(){
    this.navCtrl.setRoot(TabPage);
  }

}
