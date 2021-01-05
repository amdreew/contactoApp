import {Injectable} from '@angular/core';
import {Contact} from '@shared/models/general/Contact';
import {ManagerStorageService} from '@core/services/manager-storage.service';
import {XlsxGeneratorService} from '@shared/services/xlsx-generator.service';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ListContactsService {

  constructor(
    private readonly managerStorageService: ManagerStorageService,
    private readonly xlsxGeneratorService: XlsxGeneratorService
  ) {
  }

  public async getAllContacts(): Promise<Contact[]> {
    return this.managerStorageService.getAllContacts();
  }

  public async deleteContacto(contact: Contact): Promise<any> {
    const contacts: Contact[] = [...this.managerStorageService.getAllContacts()];
    const contactActual: Contact = contacts.find(x => x.uuid === contact.uuid);
    if (contactActual) {
      contacts.splice(contacts.indexOf(contactActual), 1);
      await this.managerStorageService.saveContacts(contacts);
      const contactsPapelera: Contact[] = [...this.managerStorageService.getAllContacsPapelera()];
      contactsPapelera.push(contactActual);
      await this.managerStorageService.saveContactsPapelera(contactsPapelera);
      return true;
    }
    return false;
  }

  public async updateVisita(contact: Contact): Promise<Contact> {
    const contacts: Contact[] = [...this.managerStorageService.getAllContacts()];
    const contactActual: Contact = contacts.find(x => x.uuid === contact.uuid);
    if (contactActual) {
      contact.curren = contact.curren + 1;
      contact.ultimaVisita = new Date();
      await contacts.splice(contacts.indexOf(contactActual), 1, contact);
      await this.managerStorageService.saveContacts(contacts);
      return contactActual;
    }
    return null;
  }

  public exportar(contacts: Contact[]): void {
    this.xlsxGeneratorService.exportAsExcelFile(contacts, 'contactos-' + uuidv4());
  }
}
