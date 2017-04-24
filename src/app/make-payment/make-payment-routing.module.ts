import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MakePaymentComponent }   from './make-payment.component';
import { InvoiceListComponent }   from './invoice-list/invoice-list.component';
import { PayComponent }   from '../pay/pay.component';

const routes: Routes = [
  { 
      path: '',  
      component: MakePaymentComponent,
      children: [
        {
            path: '',
            component: InvoiceListComponent,
        },
        {
            path: ':name',
            component: PayComponent
        }
      ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MakePaymentRoutingModule {}