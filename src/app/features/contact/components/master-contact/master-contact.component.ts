import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from '@shared/models/general/Contact';
import {Action} from '../../models/Action';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogoReferenciaService} from '@shared/services/dialogo-referencia.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactControlsKeys} from './models/ContactControlsKeys';
import {MasterContactService} from './services/master-contact.service';
import {AlertService} from '@shared/services/alert.service';

@Component({
  selector: 'app-master-contact',
  templateUrl: './master-contact.component.html',
  styleUrls: ['./master-contact.component.scss']
})
export class MasterContactComponent implements OnInit {

  public actions = Action;
  public readonly controlKeys = ContactControlsKeys;
  public readonly formGroup: FormGroup = new FormGroup({
    [this.controlKeys.IDENTIFICACION]: new FormControl(null, [Validators.required]),
    [this.controlKeys.NOMBRE]: new FormControl(null, [Validators.required]),
    [this.controlKeys.CELULAR]: new FormControl(null, [Validators.required]),
    [this.controlKeys.DIRECCION]: new FormControl(null, [Validators.required]),
    [this.controlKeys.BIRTHDAY]: new FormControl(null, [Validators.required]),
    [this.controlKeys.UUID]: new FormControl(null),
    [this.controlKeys.CURREN]: new FormControl(null),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { contacto: Contact | null, action: Action },
    private readonly dialogoReferenciaService: DialogoReferenciaService,
    private readonly masterContactService: MasterContactService,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.masterContactService.formGroup = this.formGroup;
    if (this.data.action === Action.ACTUALIZAR && this.data.contacto) {
      this.loadContacto();
    }
  }

  private loadContacto(): void {
    this.formGroup.setValue({
      [this.controlKeys.IDENTIFICACION]: this.data.contacto.nroIdentificacion,
      [this.controlKeys.NOMBRE]: this.data.contacto.nombre,
      [this.controlKeys.CELULAR]: this.data.contacto.celular,
      [this.controlKeys.DIRECCION]: this.data.contacto.direccion,
      [this.controlKeys.BIRTHDAY]: this.data.contacto.birthday,
      [this.controlKeys.UUID]: this.data.contacto.uuid,
      [this.controlKeys.CURREN]: this.data.contacto.uuid
    });
  }

  public save(): void {
    switch (this.data.action) {
      case Action.NUEVO:
        this.crearNew();
        break;
      case Action.ACTUALIZAR:
        this.actualizar();
        break;
    }
  }

  private actualizar(): void {
    this.masterContactService.update().then(
      (res) => {
        this.alertService.mostrarExitoso('Contacto Actualizado Exitosamente', 'En Hora Buena').then(
          () => {
            this.dialogoReferenciaService.close(res);
          });
      }, () => {
        this.alertService.mostrarAdvertencia('Disculapa Ha Ocurrido Un Error');
      });
  }

  private crearNew(): void {
    this.masterContactService.save().then(
      (res) => {
        this.alertService.mostrarExitoso('Contacto Creado Exitosamente', 'En Hora Buena').then(
          () => {
            this.dialogoReferenciaService.close(res);
          });
      }, () => {
        this.alertService.mostrarAdvertencia('Disculapa Ha Ocurrido Un Error');
      });
  }

  public cerrar(): void {
    this.dialogoReferenciaService.close(null);
  }

}
