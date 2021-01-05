import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PapperbinComponent} from './papperbin.component';

const routes: Routes = [
  {
    path: '',
    component: PapperbinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapperbinRoutingModule { }
