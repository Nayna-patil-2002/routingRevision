import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackabrService {
 
  constructor(
    private _matsnackbar:MatSnackBar
  ) { }

  openSnackbar(msg:string){
    let matconfig:MatSnackBarConfig={
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    }
    this._matsnackbar.open(msg, "close",  matconfig)
  }
}
