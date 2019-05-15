import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor(private snackBar: MatSnackBar) {
    }

    /**
     * Display message in Snack Bar
     */
    public showMessage(message: string, action?: string, time?: number): MatSnackBarRef<any> {
        return this.snackBar.open(message, action || 'Close', {
            duration: time || 3000
        });
    }

}
