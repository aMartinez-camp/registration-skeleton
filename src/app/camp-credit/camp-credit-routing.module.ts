import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampCreditComponent }   from './camp-credit.component';
import { AddCreditComponent }   from './add-credit/add-credit.component';
import { PayComponent }   from '../pay/pay.component';

const routes: Routes = [
  { 
      path: '',  
      component: CampCreditComponent,
      children: [
          {
              path: '',
              component: AddCreditComponent
          },
          {
              path: 'pay/:name',
              component: PayComponent
          }
      ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CampCreditRoutingModule {}