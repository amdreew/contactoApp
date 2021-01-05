import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRoutingModule } from './full-routing.module';
import { FullComponent } from './full.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderModule} from '../header/header.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from '../sidebar/sidebar.module';


@NgModule({
  declarations: [FullComponent],
  imports: [
    CommonModule,
    FullRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    HeaderModule,
    SidebarModule,
    FlexLayoutModule
  ], exports: [FullComponent]
})
export class FullModule { }
