import {Injectable} from '@angular/core';
import {EnvironmentService} from '@shared/services/environment.service';
import * as SecureLS from 'secure-ls';
import {Contact} from '@shared/models/general/Contact';
import {Keys} from '@core/models/keys';

@Injectable({
  providedIn: 'root'
})
export class ManagerStorageService {
  private secureLs: SecureLS;

  constructor(
    private readonly environmentService: EnvironmentService
  ) {
    this.secureLs = new SecureLS({
      encodingType: this.environmentService.encriptionConfig.encriptionType.base46,
      encryptionSecret: this.environmentService.encriptionConfig.encriptionKey,
      isCompression: true,
    });
  }

  public saveContacts(contacts: Contact[]): void {
    if (contacts) {
      if (this.secureLs.get(Keys.KEY_STORAGE_CONTACTS)) {
        this.secureLs.remove(Keys.KEY_STORAGE_CONTACTS);
      }
      this.secureLs.set(Keys.KEY_STORAGE_CONTACTS, JSON.stringify(contacts));
    }
  }

  public getAllContacts(): Contact[] {
    if (this.secureLs.get(Keys.KEY_STORAGE_CONTACTS)) {
      return JSON.parse(this.secureLs.get(Keys.KEY_STORAGE_CONTACTS));
    } else {
      return [];
    }
  }

  public saveContactsPapelera(contacts: Contact[]): void {
    if (contacts) {
      if (this.secureLs.get(Keys.KEY_STORAGE_PAPELERA)) {
        this.secureLs.remove(Keys.KEY_STORAGE_PAPELERA);
      }
      this.secureLs.set(Keys.KEY_STORAGE_PAPELERA, JSON.stringify(contacts));
    }
  }

  public getAllContacsPapelera(): Contact[] {
    if (this.secureLs.get(Keys.KEY_STORAGE_PAPELERA)) {
      return JSON.parse(this.secureLs.get(Keys.KEY_STORAGE_PAPELERA));
    } else {
      return [];
    }
  }

  public clearAllPapelera(): void {
    if (this.secureLs.get(Keys.KEY_STORAGE_PAPELERA)) {
      this.secureLs.remove(Keys.KEY_STORAGE_PAPELERA);
    }
  }


}
