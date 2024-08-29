import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackbar: MatSnackBar) { }

  openCustomSnackBar(message: string, icon: string) {
    this._snackbar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        icon: icon,
      },
      panelClass: ['success-snackbar']
    });
  }
}
