import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { ListService } from "../list.service";
import { HttpModule } from "@angular/http";
import { AboutPage } from '../about/about.page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  lists: any;
  name: string;
  id: number;
  age: number;
  strength: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpModule,
    public service: ListService,
    public alert: AlertController,
    public route: ActivatedRoute
  ) {
    this.lists = this.service.show();
  }

  async add(){
    await this.navCtrl.goForward('about');
  }

  async delete(i){
    let alertdelete = await this.alert.create({
      header: 'Alert !',
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
          handler: async ()=>{
            await this.service.delete(i);
          }
        }
      ]
    });
    await alertdelete.present();
  }

}
