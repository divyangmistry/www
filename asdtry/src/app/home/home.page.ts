import { Component } from '@angular/core';
import { lists } from "../list";
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ListService } from '../service/list.service';
import { SignupPage } from '../signup/signup.page';
import { SignupPageModule } from '../signup/signup.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lists = lists;
  
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public service: ListService,
    public alert: AlertController
  ){
    this.show();
  }

  show(){
    this.service.show();
  }
  
  add(){
    this.navCtrl.navigateForward('/form');
  }

  async deleteList(i){
    let alertdelete = await this.alert.create({
      header: 'Alert !',
      message: 'Do you really want to Delete "'+ i.name + '" !',
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

  gosignUp(){
    this.router.navigateByUrl('/signup');
    // this.navCtrl.goForward('/signup');
  }

  gologin(){
    this.router.navigateByUrl('/login');
  }
}
