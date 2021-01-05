import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterContactComponent} from './master-contact.component';

const routes: Routes = [
  {
    path: '',
    component: MasterContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterContactRoutingModule { }
