"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tabs_page_1 = require("./tabs.page");
var dashboard_page_1 = require("../dashboard/dashboard.page");
var reminder_page_1 = require("../reminder/reminder.page");
var records_page_1 = require("../records/records.page");
var account_page_1 = require("../account/account.page");
var routes = [
    {
        path: 'tabs',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(dashboard:dashboard)',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                outlet: 'dashboard',
                component: dashboard_page_1.DashboardPage
            },
            {
                path: 'reminder',
                outlet: 'reminder',
                component: reminder_page_1.ReminderPage
            },
            {
                path: 'records',
                outlet: 'records',
                component: records_page_1.RecordsPage
            },
            {
                path: 'account',
                outlet: 'account',
                component: account_page_1.AccountPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(dashboard:dashboard)',
        pathMatch: 'full'
    }
];
var TabsRouterModule = /** @class */ (function () {
    function TabsRouterModule() {
    }
    TabsRouterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsRouterModule);
    return TabsRouterModule;
}());
exports.TabsRouterModule = TabsRouterModule;
//# sourceMappingURL=tabs.router.module.js.map