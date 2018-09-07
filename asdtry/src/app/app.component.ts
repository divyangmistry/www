import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Sql } from './service/sql.service';
import { Router } from '@angular/router';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { loginAuthService } from './login/login-auth';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  tokenKey: string;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private sql: Sql,
    private route: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.tokenKey=localStorage.getItem('isLoggedIn');
        if (this.tokenKey) {
          this.route.navigateByUrl('')
        } else {
          this.route.navigateByUrl('login')
        }
      });

  }
}