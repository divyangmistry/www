import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { Sql } from '../service/sql.service';
// import { loginAuthService } from './login-auth';
import { AuthService } from '../service/auth.service';
import { CommonService } from '../service/common-service.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers:[
    Sql,
    // loginAuthService,
    AuthService,
    CommonService
  ]
})
export class LoginPageModule {}
