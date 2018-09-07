import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import { AuthService } from "../../service/auth.service";
import { AddRecordsPage } from './add-records.page';
// import { ModalController } from "@ionic/angular";


const routes: Routes = [
  {
    path: '',
    component: AddRecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // AuthService,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRecordsPage],
  // providers: [ModalController]
})
export class AddRecordsPageModule {}
