import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge: Badge[];
}

export interface Badge {
  value: string;
  type: string;
}

const MENUITEMS = [
  {state: 'contacts', name: 'Contactos', type: 'link', icon: 'person_outline', badge: []},
  {state: 'deletes', name: 'Papelera', type: 'link', icon: 'delete_outline', badge: []}
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
