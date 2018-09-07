import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalPagePageModule } from "../modal-page/modal-page.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalPagePageModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  providers:[HttpClient],
  declarations: [HomePage]
})
export class HomePageModule {}
