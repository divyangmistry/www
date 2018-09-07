import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormPage } from '../form/form.component';
import { lists, list } from "../list.service";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists: list[];
  name: string;
  id: number;
  age: number;
  strength: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpModule,
    public service: lists,
    public alert: AlertController
  ) {
    this.lists = this.service.show();  
  }

  add(){
    this.navCtrl.push(FormPage);
  }

  delete(i){
    let alertdelete = this.alert.create({
      title: 'Confirm Delete',
      message: 'Do you really want to Remove HERO "'+ i.name + '" !',
      buttons: [
        
        {
          text: 'cancle',
          handler: ()=>{
            return
          }
        },

        {
          text: 'yes',
          handler: ()=>{
            this.service.delete(i);
          }
        }
      ]
    });
    alertdelete.present();
  }

}
