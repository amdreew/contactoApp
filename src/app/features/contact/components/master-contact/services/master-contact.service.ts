import {Injectable} from '@angular/core';
import {ManagerStorageService} from '@core/services/manager-storage.service';
import {Contact} from '@shared/models/general/Contact';
import {ContactControlsKeys} from '../models/ContactControlsKeys';
import {FormGroup} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class MasterContactService {
  private readonly controlKeys = ContactControlsKeys;
  private _formGroup: FormGroup;

  constructor(
    private managerStorageService: ManagerStorageService
  ) {
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  set formGroup(value: FormGroup) {
    this._formGroup = value;
  }

  public async save(): Promise<Contact> {
    const contact: Contact = this.getContactTipiado(true);
    const contacts: Contact[] = this.managerStorageService.getAllContacts();
    await contacts.push(contact);
    await this.managerStorageService.saveContacts(contacts);
    this.resetForm();
    return contact;
  }

  public async update(): Promise<Contact> {
    const contacts: Contact[] = [...this.managerStorageService.getAllContacts()];
    const contactNew: Contact = this.getContactTipiado(false);
    const contactActual: Contact = contacts.find(x => x.uuid === contactNew.uuid);
    if (contactActual) {
      await contacts.splice(contacts.indexOf(contactActual), 1, contactNew);
      await this.managerStorageService.saveContacts(contacts);
      return contactNew;
    }
    return null;
  }

  private resetForm(): void {
    this.formGroup.reset({
      [this.controlKeys.IDENTIFICACION]: null,
      [this.controlKeys.NOMBRE]: null,
      [this.controlKeys.CELULAR]: null,
      [this.controlKeys.DIRECCION]: null,
      [this.controlKeys.BIRTHDAY]: null,
      [this.controlKeys.CURREN]: null
    });
  }

  private getContactTipiado(newContact: boolean): Contact {
    return {
      uuid: newContact ? uuidv4() : this.formGroup.get([this.controlKeys.UUID])?.value,
      nroIdentificacion: this.formGroup.get([this.controlKeys.IDENTIFICACION])?.value,
      nombre: this.formGroup.get([this.controlKeys.NOMBRE])?.value,
      direccion: this.formGroup.get([this.controlKeys.DIRECCION])?.value,
      celular: this.formGroup.get([this.controlKeys.CELULAR])?.value,
      birthday: this.formGroup.get([this.controlKeys.BIRTHDAY])?.value,
      curren: newContact ? 1 : (this.formGroup.get([this.controlKeys.BIRTHDAY])?.value + 1),
      ultimaVisita: new Date(),
    };
  }

}
