import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { ModalController } from "@ionic/angular";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Sql } from './service/sql.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './service/common-service.service';
import { AddAddressPageModule } from './address/add-address/add-address.module';
import { AddRecordsPageModule } from './records/add-records/add-records.module';
import { ViewRecordsPageModule } from '../app/records/view-records/view-records.module';
import { AuthService } from './service/auth.service';
import { TokenService } from "./service/token.service";
// import { File } from '@ionic-native/file';
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AddAddressPageModule,
    AddRecordsPageModule,
    ViewRecordsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    TokenService,
    Sql,
    AuthService,
    // ModalController,
    // File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
