import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddressPage } from './address.page';
import { AddAddressPage } from './add-address/add-address.page';
import { EditAddressPage } from './edit-address/edit-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    // AddAddressPage,
    // EditAddressPage,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressPage]
})
export class AddressPageModule {}
