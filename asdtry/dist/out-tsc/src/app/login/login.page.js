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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../service/auth.service");
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var param_s_1 = require("../param-s");
var sql_service_1 = require("../service/sql.service");
var common_service_service_1 = require("../service/common-service.service");
var LoginPage = /** @class */ (function () {
    function LoginPage(FB, auth, alertCtrl, sql, paaram, route, commonService) {
        this.FB = FB;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.sql = sql;
        this.paaram = paaram;
        this.route = route;
        this.commonService = commonService;
        this.user = {};
        this.loginForm = this.FB.group({
            mobile: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.userdata = JSON.parse(localStorage.getItem('userData'));
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.sql.get('deviceToken').then(function (response) {
            _this.sendData(response);
        });
    };
    LoginPage.prototype.sendData = function (deviceToken) {
        var _this = this;
        var userDetails = Object.assign({}, this.user, this.loginForm.value, { 'device_token': deviceToken });
        this.auth.login(userDetails).subscribe(function (data) {
            if (data.token) {
                _this.sql.set('isLoggedIn', 'true');
                _this.sql.set('token', data.token);
                _this.sql.set('customer', JSON.stringify(data.customer));
                _this.route.navigate(['tabs']);
                // this.commonService.dismissLoading();
            }
            (function (err) {
                console.log(err);
            });
        });
    };
    LoginPage.prototype.showError = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Fail',
                            subHeader: text,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            angular_1.AlertController,
            sql_service_1.Sql,
            param_s_1.ParamS,
            router_1.Router,
            common_service_service_1.CommonService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map