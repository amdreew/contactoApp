import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AccordionDirectivesModule} from '../../directives/acordeon-directive/accordion-directives.module';
import {MenuItems} from './menu-items/menu-items';




@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    AccordionDirectivesModule,
    FlexLayoutModule,
  ], exports: [SidebarComponent],
  providers: [MenuItems]
})
export class SidebarModule { }
