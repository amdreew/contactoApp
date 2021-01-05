import {Component, OnInit} from '@angular/core';
import {ContactService} from './services/contact.service';

@Component({
  selector: 'app-contact',
  template: `
    <div class="containeru">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          {{sizeContacts}}
        </div>
        <div class="toolCard">
          Total de Contactos
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          {{contactsBirthDayToday}}
        </div>
        <div class="toolCard">
          Happy Birthday today
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          {{sizeContactsPepelera}}
        </div>
        <div class="toolCard">
          Contactos en Papelera
        </div>
      </div>

    </div>
    <app-list-contact (changeData)="loadResume()" ></app-list-contact>
  `
})
export class ContactComponent implements OnInit {
  public sizeContacts = 0;
  public sizeContactsPepelera = 0;
  public contactsBirthDayToday = 0;

  constructor(
    private readonly contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.loadResume();
  }

  public loadResume(): void {
    this.contactService.sizeContacts().then((res) => this.sizeContacts = res);
    this.contactService.sizeContactsPepelera().then((res) => this.sizeContactsPepelera = res);
    this.contactService.contactsBirthDayToday().then((res) => this.contactsBirthDayToday = res);
  }

}
