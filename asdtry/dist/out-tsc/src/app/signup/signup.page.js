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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../service/auth.service");
var toast_service_1 = require("../service/toast.service");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var param_s_1 = require("../param-s");
var common_service_service_1 = require("../service/common-service.service");
var SignupPage = /** @class */ (function () {
    function SignupPage(FB, auth, toast, route, navCtrl, paaram, common) {
        this.FB = FB;
        this.auth = auth;
        this.toast = toast;
        this.route = route;
        this.navCtrl = navCtrl;
        this.paaram = paaram;
        this.common = common;
        this.user = {
            device_token: '123vghtfh'
        };
        this.signupForm = this.FB.group({
            name: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            mobile: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var userDetails = Object.assign({}, this.user, this.signupForm.value);
        this.auth.register(userDetails).subscribe(function (data) {
            _this.paaram.mobile = _this.signupForm.controls.mobile.value;
            _this.paaram.res = data;
            _this.toast.signupToast();
            _this.route.navigateByUrl('otpVerification');
        }, function (err) {
            var error = err.json();
            console.log(error);
            _this.common.toast(error.message);
        });
    };
    SignupPage = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            toast_service_1.ToastService,
            router_1.Router,
            angular_1.NavController,
            param_s_1.ParamS,
            common_service_service_1.CommonService])
    ], SignupPage);
    return SignupPage;
}());
exports.SignupPage = SignupPage;
//# sourceMappingURL=signup.page.js.map