import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home.component';
import { Storage } from '@ionic/storage';
import { lists } from "../list.service";

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  heroForm: FormGroup;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public FB: FormBuilder,
    public  storage: Storage,
    public list: lists,
    private toastCtrl: ToastController
  ) {
    this.heroForm = FB.group({
      name: ['', Validators.required],
      strength: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  add()
  {
    let data = this.heroForm.value;
    let toast = this.toastCtrl.create({
      message: 'ok Cool now you are a HERO',
      duration: 3000
    });
    toast.present();
    this.list.push(data);
    this.navCtrl.setRoot(HomePage);
  }

}
