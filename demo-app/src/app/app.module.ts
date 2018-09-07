import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.component';
import { FormPage } from "../pages/form/form.component";
import { lists } from "../pages/list.service";
import { NavigationPage } from "../pages/navigation/navigation.component";
import { DisplayListPage } from "../pages/display-list/display-list.component";
import { PushPage } from "../pages/push/push";
import { TabPage } from "../pages/tab/tab";
import { MainPage } from "../pages/main/main";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    NavigationPage,
    DisplayListPage,
    PushPage,
    TabPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    NavigationPage,
    DisplayListPage,
    PushPage,
    TabPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    lists,
    TabPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
