import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import { CommonService } from '../service/common-service.service';
// import { ParamS } from '../param-s';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPage],
  providers:[
    AuthService, 
    ToastService, 
    CommonService
  ]
})
export class SignupPageModule {}
