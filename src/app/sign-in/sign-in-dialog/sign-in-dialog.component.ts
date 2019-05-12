import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    templateUrl: 'sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss']
})

export class SignInDialogComponent {

    constructor(public dialogRef: MatDialogRef<SignInDialogComponent>) {
    }

    public closeDialog(e?: any) {
        this.dialogRef.close(e);
    }
}
