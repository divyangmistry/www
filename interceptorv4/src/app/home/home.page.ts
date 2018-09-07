import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCallsService } from '../providers/api-calls.service';
import { Sql } from '../providers/sql';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {  

  constructor(
    private FB: FormBuilder,
    private sql: Sql,
    private service: ApiCallsService,
    private modalCtrl: ModalController
  ) { 
  }

  async toModal(){
    let modal = await this.modalCtrl.create({
      component: ModalPagePage,
    });

    return await modal.present();
  }

}
