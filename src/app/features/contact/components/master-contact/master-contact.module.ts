import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterContactRoutingModule } from './master-contact-routing.module';
import {MasterContactComponent} from './master-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MasterContactService} from './services/master-contact.service';


@NgModule({
  declarations: [MasterContactComponent],
  imports: [
    CommonModule,
    MasterContactRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ], exports: [MasterContactComponent],
  providers: [MasterContactService]
})
export class MasterContactModule { }
