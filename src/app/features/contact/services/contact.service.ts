import {Injectable} from '@angular/core';
import {ManagerStorageService} from '@core/services/manager-storage.service';
import {Contact} from '@shared/models/general/Contact';

@Injectable()
export class ContactService {

  constructor(
    private readonly managerStorageService: ManagerStorageService
  ) {
  }

  private getAllContactos(): Contact[] {
    return this.managerStorageService.getAllContacts();
  }

  private getAllContactosPapelera(): Contact[] {
    return this.managerStorageService.getAllContacsPapelera();
  }

  public async sizeContacts(): Promise<number> {
    return this.getAllContactos().length;
  }

  public async sizeContactsPepelera(): Promise<number> {
    return this.getAllContactosPapelera().length;
  }

  public async contactsBirthDayToday(): Promise<number> {
    let birthDayToday = 0;
    await this.getAllContactos().forEach((x) => {
      if (this.getDate(new Date(x.birthday)) === this.getDate(new Date())) {
        birthDayToday += 1;
      }
    });
    return birthDayToday;
  }

  getDate(date: Date): string {
    const aaaa = date.getUTCFullYear().toString();
    let gg = (date.getUTCDate()).toString();
    let mm = (date.getUTCMonth() + 1).toString();
    if (gg.length < 2) {
      gg = `0${gg}`;
    }
    if (mm.length < 2) {
      mm = `0${mm}`;
    }
    return `${aaaa}-${mm}-${gg}`;
  }

}
