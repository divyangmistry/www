import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {
  
  name: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.name = this.navParams.get('name')
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
