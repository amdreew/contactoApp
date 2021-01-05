import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullComponent} from './full.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
      },
      {
        path: 'contacts',
        loadChildren: () => import('../../../features/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'deletes',
        loadChildren: () => import('../../../features/papperbin/papperbin.module').then(m => m.PapperbinModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullRoutingModule { }
