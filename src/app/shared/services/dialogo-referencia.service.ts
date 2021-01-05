import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class DialogoReferenciaService {

    private dialogRef: any;

    constructor(private dialog: MatDialog) { }

    public open(component: any, action: (...parameters: any) => void, data?: any, options?: any): any {
        this.dialogRef = this.dialog.open(component, {
            width: !options?.width ? '80%' : options.width,
            disableClose: true,
            autoFocus: true,
            height: !options?.height ? '100%' : options.height,
            data
        });
        this.dialogRef.afterClosed().subscribe(action);
    }

    public close(dataReturned: any): any {
        this.dialogRef.close(dataReturned);
    }
}
