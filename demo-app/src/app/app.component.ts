import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from "../pages/home/home.component";
// import { FormPage } from '../pages/form/form.component';
// import { NavigationPage } from '../pages/navigation/navigation.component';
// import { TabPage } from '../pages/tab/tab';
import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // tab1Root: any = HomePage;
  // tab2Root: any = FormPage;
  // tab3Root: any = NavigationPage;
  rootPage = MainPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

