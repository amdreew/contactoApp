import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {ListContactModule} from './components/list-contact/list-contact.module';
import {ContactService} from './services/contact.service';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ListContactModule
  ], exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
