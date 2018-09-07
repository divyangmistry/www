import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPrescriptionPage } from './add-prescription.page';

const routes: Routes = [
  {
    path: '',
    component: AddPrescriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddPrescriptionPage]
})
export class AddPrescriptionPageModule {}
