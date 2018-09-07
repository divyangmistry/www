import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, App } from 'ionic-angular';
import { DisplayListPage } from '../display-list/display-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PushPage } from '../push/push';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  pushNG: boolean = true;
  nameForm: FormGroup;
  testNav: any;

  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public FB: FormBuilder
  ) {
    this.nameForm = this.FB.group({
      name: ['', Validators.required]
    });
  }

  modal() {
    this.pushNG = true;
    let showmodal = this.modalCtrl.create(DisplayListPage);
    showmodal.present();
  }

  push() {
    this.pushNG = false;
  }

  push1() {
    this.testNav = this.app.getRootNav();
    this.testNav.setRoot(MainPage);
  }

  send() {
    this.navCtrl.push(PushPage, this.nameForm.value);
    this.pushNG = true;
  }

  setRoot() {
    this.app.getRootNav().setRoot(MainPage);
  }

  newThing() {
    this.pushNG = true;

  }

}
