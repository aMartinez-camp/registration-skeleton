import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MakePaymentRoutingModule }     from './make-payment-routing.module';

import { DataService } from '../services/data.service';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MakePaymentComponent } from './make-payment.component';
import { PayComponent } from '../pay/pay.component';

@NgModule({
  declarations: [
    MakePaymentComponent,
    InvoiceListComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MakePaymentRoutingModule
  ],
  providers: [DataService]
})
export class MakePaymentModule { }
