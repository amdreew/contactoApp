import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Contact} from '@shared/models/general/Contact';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PapperbinService} from './services/papperbin.service';
import {AlertService} from '@shared/services/alert.service';

@Component({
  selector: 'app-papperbin',
  templateUrl: './papperbin.component.html',
  styleUrls: ['./papperbin.component.scss']
})
export class PapperbinComponent implements OnInit {
  public displayedColumns: string[] = ['icon', 'nombre', 'celular', 'birthday', 'action'];
  public dataSource = new MatTableDataSource<Contact>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private readonly papperbinService: PapperbinService,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loadContactos();
  }

  public loadContactos(): void {
    this.papperbinService.getContactsPapelera().then(
      (res) => {
        this.dataSource = new MatTableDataSource(res ? res : []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public restaurarContactos(contacts: Contact): void {
    const action = () => {
      this.papperbinService.restaurarContacto(contacts).then(
        (res) => {
          this.alertService.mostrarExitoso('Contacto Restaurado Exitosamente', 'En Hora Buena');
          this.loadContactos();
        }, () => {
          this.alertService.mostrarAdvertencia('Disculapa Ha Ocurrido Un Error');
        });
    };
    this.alertService.question({
      titulo: 'Atención!',
      prgunta: '¿Está seguro que desea restaurar el contacto?',
      mensajeConfirmacion: 'Si estoy seguro! ',
      mensajeNegacion: 'No, no estoy seguro!',
      mensajeCancelacion: 'El contacto no ha sido restaurado!',
    }, action);
  }

  public deleteAll(): void {
    const action = () => {
      this.papperbinService.clearAllPapelera().then(
        (res) => {
          this.alertService.mostrarExitoso('La Papelera Ha Sido Limpiada Exitosamente', 'En Hora Buena');
          this.loadContactos();
        }, () => {
          this.alertService.mostrarAdvertencia('Disculapa Ha Ocurrido Un Error');
        });
    };
    this.alertService.question({
      titulo: 'Atención!',
      prgunta: '¿Está seguro que desea Limpiar La Papelera?',
      mensajeConfirmacion: 'Si estoy seguro! ',
      mensajeNegacion: 'No, no estoy seguro!',
      mensajeCancelacion: 'La papelera no ha sido limpiada!',
    }, action);
  }

  public deleteContacts(contacts: Contact): void {
    const action = () => {
      this.papperbinService.deleteContactoPapelera(contacts).then(
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
