"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/status-bar/ngx");
var sql_service_1 = require("./service/sql.service");
var router_1 = require("@angular/router");
var login_auth_1 = require("./login/login-auth");
var ngx_2 = require("@ionic-native/splash-screen/ngx");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, statusBar, splashScreen, authService, sql, 
    // private push: Push,
    route) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.sql = sql;
        this.route = route;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.route.navigateByUrl('signup')
            // this.initPushNotification();
            _this.sql.get('isLoggedIn').then(function (data) {
                if (data == 'true') {
                    // this.rootPage = HomePageTabs;
                    _this.route.navigateByUrl('tabs');
                }
                else {
                    _this.route.navigateByUrl('home');
                    // this.rootPage = HomePage;
                }
            });
        });
        this.authService.authNotifier.subscribe(function (loggedIn) {
            if (!loggedIn) {
                _this.route.navigateByUrl('login');
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [angular_1.Platform,
            ngx_1.StatusBar,
            ngx_2.SplashScreen,
            login_auth_1.loginAuthService,
            sql_service_1.Sql,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// export const GlobalVariable = Object.freeze({
//   BASE_API_URL: 'https://lyfcheck-api.webelight.co.in/api/v1/'
// });
// }
//# sourceMappingURL=app.component.js.map