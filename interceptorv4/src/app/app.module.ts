import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './providers/auth-interceptor';
import { Sql } from "./providers/sql";
import { ApiCallsService } from "./providers/api-calls.service";
import { AuthStarterService } from "./providers/auth-starter.service";
import { ModalPagePage } from './modal-page/modal-page.page';
import { ModalPagePageModule } from './modal-page/modal-page.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    Sql,
    SplashScreen,
    ApiCallsService,
    AuthStarterService,
    ModalPagePageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
