"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var tabs_page_1 = require("./tabs.page");
var tabs_router_module_1 = require("./tabs.router.module");
var dashboard_module_1 = require("../dashboard/dashboard.module");
var reminder_module_1 = require("../reminder/reminder.module");
var records_module_1 = require("../records/records.module");
var account_module_1 = require("../account/account.module");
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                tabs_router_module_1.TabsRouterModule,
                dashboard_module_1.DashboardPageModule,
                account_module_1.AccountPageModule,
                records_module_1.RecordsPageModule,
                reminder_module_1.ReminderPageModule
            ],
            declarations: [tabs_page_1.TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
exports.TabsPageModule = TabsPageModule;
//# sourceMappingURL=tabs.module.js.map