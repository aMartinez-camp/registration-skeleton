import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewFamilyComponent }   from './view-family.component';
import { FamilyListComponent }   from './family-list/family-list.component';
import { ContactEditorComponent }   from '../contact-editor/contact-editor.component';

const routes: Routes = [
  { 
      path: '',  
      component: ViewFamilyComponent,
      children: [
          {
              path: '',
              component: FamilyListComponent,
              children: [
                  {
                      path: ':name',
                      component: ContactEditorComponent
                  },
                  {
                      path: 'new',
                      component: ContactEditorComponent
                  }
              ]
          }
      ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FamilyRoutingModule {}