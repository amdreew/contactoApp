import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapperbinRoutingModule } from './papperbin-routing.module';
import { PapperbinComponent } from './papperbin.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ColorModule} from '@shared/pipes/color/color.module';
import {PapperbinService} from './services/papperbin.service';
import {AlertService} from '@shared/services/alert.service';


@NgModule({
  declarations: [PapperbinComponent],
  imports: [
    CommonModule,
    PapperbinRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ColorModule
  ], exports: [PapperbinComponent],
  providers: [PapperbinService, AlertService]
})
export class PapperbinModule { }
