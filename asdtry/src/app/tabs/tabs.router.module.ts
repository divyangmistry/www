import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { DashboardPage } from '../dashboard/dashboard.page';
import { ReminderPage } from '../reminder/reminder.page';
import { RecordsPage } from '../records/records.page';
import { AccountPage } from '../account/account.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(dashboard:dashboard)',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                outlet: 'dashboard',
                component: DashboardPage
            },
            {
                path: 'reminder',
                outlet: 'reminder',
                component: ReminderPage
            },
            {
                path: 'records',
                outlet: 'records',
                component: RecordsPage
            },
            {
                path: 'account',
                outlet: 'account',
                component: AccountPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(dashboard:dashboard)',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRouterModule { }