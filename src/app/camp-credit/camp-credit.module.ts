import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CampCreditRoutingModule }     from './camp-credit-routing.module';

import { DataService } from '../services/data.service';

import { CampCreditComponent } from './camp-credit.component';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { PayComponent } from '../pay/pay.component';

@NgModule({
  declarations: [
    CampCreditComponent,
    AddCreditComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CampCreditRoutingModule
  ],
  providers: [DataService]
})
export class CampCreditModule { }
