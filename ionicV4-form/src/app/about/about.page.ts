import { Component } from '@angular/core';
import { HomePage } from '../home/home.page';
import { NavController, NavParams, ToastController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from "../list.service";


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  heroForm: FormGroup;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public FB: FormBuilder,
    public  storage: Storage,
    public list: ListService,
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

  async add()
  {
    let data = this.heroForm.value;
    let toast = await this.toastCtrl.create({
      message: 'ok Cool now you are a HERO',
      duration: 3000
    });
    await toast.present();
    this.list.push(data);
    this.navCtrl.goRoot('home');
  }

}
