import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ModalController } from "@ionic/angular";
import { RecordsPage } from './records.page';
// import { CommonService } from '../service/common-service.service';

const routes: Routes = [
  {
    path: '',
    component: RecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // CommonService,
    RouterModule.forChild(routes)
  ],
  declarations: [RecordsPage],
  providers: [
    ModalController,
  ]
})
export class RecordsPageModule {}
