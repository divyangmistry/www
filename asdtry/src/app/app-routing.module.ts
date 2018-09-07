import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'otpVerification', loadChildren: './otp-verification/otp-verification.module#OtpVerificationPageModule' },
  { path: 'addPrescription', loadChildren: './add-prescription/add-prescription.module#AddPrescriptionPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'refillPage', loadChildren: './refill-page/refill-page.module#RefillPagePageModule' },
  { path: 'profile', loadChildren: './account/profile/profile.module#ProfilePageModule' },
  { path: 'address', loadChildren: './address/address.module#AddressPageModule' },
  { path: 'help', loadChildren: './account/help/help.module#HelpPageModule' },
  { path: 'addAddress', loadChildren: './address/add-address/add-address.module#AddAddressPageModule' },
  { path: 'editAddress', loadChildren: './address/edit-address/edit-address.module#EditAddressPageModule' },
  { path: 'reviewOrderPage', loadChildren: './review-order-page/review-order-page.module#ReviewOrderPagePageModule' },
  { path: 'addRecords', loadChildren: './records/add-records/add-records.module#AddRecordsPageModule' },
  { path: 'viewRecords', loadChildren: './records/view-records/view-records.module#ViewRecordsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
