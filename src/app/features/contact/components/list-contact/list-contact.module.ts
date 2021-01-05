import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListContactComponent} from './list-contact.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MasterContactModule} from '../master-contact/master-contact.module';
import {DialogoReferenciaService} from '@shared/services/dialogo-referencia.service';
import {MatDialogModule} from '@angular/material/dialog';
import {AlertService} from '@shared/services/alert.service';
import {ListContactsService} from './services/list-contacts.service';
import {ColorModule} from '@shared/pipes/color/color.module';


@NgModule({
  declarations: [ListContactComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MasterContactModule,
    MatDialogModule,
    ColorModule
  ], exports: [ListContactComponent],
  providers: [DialogoReferenciaService, AlertService, ListContactsService]
})
export class ListContactModule { }
