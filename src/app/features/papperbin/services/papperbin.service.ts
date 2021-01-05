import {Injectable} from '@angular/core';
import {ManagerStorageService} from '@core/services/manager-storage.service';
import {Contact} from '@shared/models/general/Contact';

@Injectable()
export class PapperbinService {

  constructor(
    private readonly managerStorageService: ManagerStorageService
  ) {
  }

  public async getContactsPapelera(): Promise<Contact[]> {
    return this.managerStorageService.getAllContacsPapelera();
  }

  public async clearAllPapelera(): Promise<boolean> {
    await this.managerStorageService.clearAllPapelera();
    return true;
  }

  public async deleteContactoPapelera(contact: Contact): Promise<any> {
    const contacts: Contact[] = [...this.managerStorageService.getAllContacsPapelera()];
    const contactActual: Contact = contacts.find(x => x.uuid === contact.uuid);
    if (contactActual) {
      contacts.splice(contacts.indexOf(contactActual), 1);
      await this.managerStorageService.saveContactsPapelera(contacts);
      return true;
    }
    return false;
  }

  public async restaurarContacto(contact: Contact): Promise<any> {
    const contactsPapelera: Contact[] = [...this.managerStorageService.getAllContacsPapelera()];
    const contactActual: Contact = contactsPapelera.find(x => x.uuid === contact.uuid);

    if (contactActual) {
      contactsPapelera.splice(contactsPapelera.indexOf(contactActual), 1);
      await this.managerStorageService.saveContactsPapelera(contactsPapelera);

      const contacts: Contact[] = [...this.managerStorageService.getAllContacts()];
      contacts.push(contactActual);
      await this.managerStorageService.saveContacts(contacts);

      return true;
    }

    return false;
  }


}
