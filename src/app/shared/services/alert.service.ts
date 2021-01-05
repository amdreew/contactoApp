import {Injectable} from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';
import {Question} from '@shared/models/dialogo/Question';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  public mostrarExitoso(mensaje: string, titulo?: string): Promise<any> {
    return this.mostraConIcono(mensaje, titulo ? titulo : '', 'success');
  }

  public mostrarAdvertencia(mensaje: string, titulo?: string): Promise<any> {
    return this.mostraConIcono(mensaje, titulo ? titulo : '', 'warning');
  }

  public mostrarError(mensaje: string, titulo?: string): Promise<any> {
    return this.mostraConIcono(mensaje, titulo ? titulo : '', 'error');
  }

  private mostraConIcono(mensaje: string, titulo: string, tipoMensaje: SweetAlertIcon): Promise<any> {
    return Swal.fire(titulo, mensaje, tipoMensaje);
  }

  public question(question: Question, action: (...parameters: any) => void): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: question.titulo,
        text: `${question.prgunta}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: question.mensajeConfirmacion,
        cancelButtonText: question.mensajeNegacion,
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          action();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.mostrarAdvertencia(question.mensajeCancelacion ? question.mensajeCancelacion : 'Cancelado').then();
        }
      });
  }
}
