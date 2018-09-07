import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Sql } from '../service/sql.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private sql: Sql
  ) { }

  ngOnInit() {
  }

  profilePage(){
    this.navCtrl.navigateForward('profile');
  }

  addressPage(){
    this.navCtrl.navigateForward('address');
  }

  helpPage(){
    this.navCtrl.navigateForward('help');
  }

  signoutPage(){
    this.sql.clear();
    this.navCtrl.navigateRoot('login')
  }

}
