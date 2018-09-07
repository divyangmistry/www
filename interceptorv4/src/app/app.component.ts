import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Sql } from './providers/sql';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  isLogin: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private sql: Sql
  ) {
    this.initializeApp();
    debugger
    this.sql.get('isLogin').then((data) =>{
      this.isLogin = data;
      console.log(this.isLogin + '  inside App-Component')
      
      if(this.isLogin){
        this.route.navigateByUrl('');
      }else{
        this.route.navigateByUrl('login');
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      debugger
      if(this.isLogin){
        this.route.navigateByUrl('');
      }else{
        this.route.navigateByUrl('login');
      }
    });
  }
}
