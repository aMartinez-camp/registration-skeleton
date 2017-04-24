import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FamilyRoutingModule }     from './view-family-routing.module';

import { DataService } from '../services/data.service';

import { FamilyListComponent } from './family-list/family-list.component';
import { ViewFamilyComponent } from './view-family.component';
import { ContactEditorComponent } from '../contact-editor/contact-editor.component';

@NgModule({
  declarations: [
    ViewFamilyComponent,
    FamilyListComponent,
    ContactEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FamilyRoutingModule
  ],
  providers: [DataService]
})
export class ViewFamilyModule { }
