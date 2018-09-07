import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsRouterModule } from './tabs.router.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { ReminderPageModule } from '../reminder/reminder.module';
import { RecordsPageModule } from '../records/records.module';
import { AccountPageModule } from '../account/account.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRouterModule,
    DashboardPageModule,
    AccountPageModule,
    RecordsPageModule,
    ReminderPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
