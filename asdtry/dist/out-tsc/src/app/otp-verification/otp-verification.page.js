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
var auth_service_1 = require("../service/auth.service");
var router_1 = require("@angular/router");
var param_s_1 = require("../param-s");
// import { NavParams } from '@ionic/angular';
var OtpVerificationPage = /** @class */ (function () {
    function OtpVerificationPage(
    // public FB: FormBuilder,
    service, route, activatedRoute, paramService) {
        // this.otpVerifyForm = this.FB.group({
        //   otp: ['', Validators.required]
        // })
        this.service = service;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.paramService = paramService;
        this.resMssg = this.paramService.res;
        this.mobile = this.paramService.mobile;
    }
    OtpVerificationPage.prototype.ngOnInit = function () {
    };
    OtpVerificationPage.prototype.submitOtp = function () {
        var _this = this;
        this.placedata = {
            mobile: this.mobile,
            otp: this.OTP
        };
        this.service.verifyOtp(this.placedata).subscribe(function (date) {
            return _this.route.navigateByUrl('home');
        }), function (err) { console.log(err); };
    };
    OtpVerificationPage = __decorate([
        core_1.Component({
            selector: 'app-otp-verification',
            templateUrl: './otp-verification.page.html',
            styleUrls: ['./otp-verification.page.scss'],
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            router_1.ActivatedRoute,
            param_s_1.ParamS])
    ], OtpVerificationPage);
    return OtpVerificationPage;
}());
exports.OtpVerificationPage = OtpVerificationPage;
//# sourceMappingURL=otp-verification.page.js.map