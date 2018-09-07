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
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var list_service_1 = require("../service/list.service");
var toast_service_1 = require("../service/toast.service");
var FormPage = /** @class */ (function () {
    function FormPage(FB, route, toastCtrl, service, navCtrl, toast) {
        this.FB = FB;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.addForm = this.FB.group({
            name: ['', forms_1.Validators.required],
            age: ['', forms_1.Validators.required]
        });
    }
    FormPage.prototype.ngOnInit = function () {
    };
    FormPage.prototype.submit = function () {
        var data = this.addForm.value;
        this.toast.submitToast();
        this.service.add(data);
        this.navCtrl.goRoot('/home');
    };
    FormPage = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.page.html',
            styleUrls: ['./form.page.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            angular_1.ToastController,
            list_service_1.ListService,
            angular_1.NavController,
            toast_service_1.ToastService])
    ], FormPage);
    return FormPage;
}());
exports.FormPage = FormPage;
//# sourceMappingURL=form.page.js.map