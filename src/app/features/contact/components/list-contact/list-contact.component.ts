import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Contact} from '@shared/models/general/Contact';
import {DialogoReferenciaService} from '@shared/services/dialogo-referencia.service';
import {MasterContactComponent} from '../master-contact/master-contact.component';
import {Action} from '../../models/Action';
import {ListContactsService} from './services/list-contacts.service';
import {AlertService} from '@shared/services/alert.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  public displayedColumns: string[] = ['icon', 'nombre', 'celular', 'birthday', 'action'];
  public dataSource = new MatTableDataSource<Contact>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @Output() changeData = new EventEmitter<boolean>();

  constructor(
    private readonly dialogoReferenciaService: DialogoReferenciaService,
    private readonly listContactsService: ListContactsService,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loadContactos();
  }

  public loadContactos(): void {
    this.listContactsService.getAllContacts().then(
      (res) => {
        this.changeData.emit(true);
        this.dataSource = new MatTableDataSource(res ? res : []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  public exportar(): void {
    this.listContactsService.exportar(this.dataSource.data);
  }

  public new(): void {
    const action = (result: any) => {
      if (result) {
        this.loadContactos();
      }
    };
    this.dialogoReferenciaService.open(MasterContactComponent, action, {contacto: null, action: Action.NUEVO}, {
      width: '60%',
      height: 'auto'
    });
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public view(contacto: Contact): void {
    const action = (result: Contact) => {
      console.log('ejecuto');
      if (result) {
        this.listContactsService.updateVisita(result);
        this.loadContactos();
      } else {
        this.listContactsService.updateVisita(contacto);
      }
    };
    this.dialogoReferenciaService.open(MasterContactComponent, action, {contacto, action: Action.ACTUALIZAR}, {
      width: '60%',
      height: 'auto'
    });
  }

  public deleteContacts(contacto: Contact): void {
    const action = () => {
      this.listContactsService.deleteContacto(contacto).then(
        (res) => {
          this.alertService.mostrarExitoso('Contacto Eliminado Exitosamente', 'En Hora Buena');
          this.loadContactos();
        }, () => {
          this.alertService.mostrarAdvertencia('Disculapa Ha Ocurrido Un Error');
        });
    };
    this.alertService.question({
      titulo: 'Atención!',
      prgunta: '¿Está seguro que desea eliminar el contacto?',
      mensajeConfirmacion: 'Si estoy seguro! ',
      mensajeNegacion: 'No, no estoy seguro!',
      mensajeCancelacion: 'El contacto no ha sido eliminado!',
    }, action);

  }

}
