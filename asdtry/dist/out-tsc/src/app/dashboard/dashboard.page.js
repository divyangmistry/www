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
var router_1 = require("@angular/router");
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, modalCtrl, 
    // private dashBoardService: DashBoardService,
    platform, route) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.route = route;
        this.count = 0;
    }
    // @ViewChild(Slides) slides: Slides;
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        // this.dashBoardService.validateToken().subscribe((res) => {
        //   if (res.message === 'Authorised') {
        //   } else {
        //     this.route.navigateByUrl('login');
        //   }
        // });
        // this.slides.startAutoplay()
    };
    DashboardPage.prototype.addPrescription = function () {
        this.route.navigate(['addPrescription']);
    };
    DashboardPage.prototype.refillScreen = function () {
        this.route.navigate(['refillPage']);
    };
    DashboardPage.prototype.orders = function () {
        this.route.navigate(['orders']);
    };
    DashboardPage = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        __metadata("design:paramtypes", [angular_1.NavController,
            angular_1.ModalController,
            angular_1.Platform,
            router_1.Router])
    ], DashboardPage);
    return DashboardPage;
}());
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=dashboard.page.js.map