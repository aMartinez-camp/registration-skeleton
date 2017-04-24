import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ViewFamilyComponent } from './view-family/view-family.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'manage-account',  component: ManageAccountComponent },
  { path: 'view-family', loadChildren: 'app/view-family/view-family.module#ViewFamilyModule', data: { preload: true} },
  { path: 'make-payment', loadChildren: 'app/make-payment/make-payment.module#MakePaymentModule', data: { preload: true} },
  { path: 'camp-credit', loadChildren: 'app/camp-credit/camp-credit.module#CampCreditModule', data: { preload: true } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}