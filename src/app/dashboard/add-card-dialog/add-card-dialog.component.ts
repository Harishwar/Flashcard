import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { FirebaseService } from '../../services/firebase.service';
import { HelperService } from '../../services/helper.service';

@Component({
    templateUrl: 'add-card-dialog.component.html'
})

export class AddCardDialogComponent implements OnInit {

    public addCardForm: FormGroup;
    public isAdding: boolean;

    constructor(
        private dialogRef: MatDialogRef<AddCardDialogComponent>,
        private snackBar: MatSnackBar,
        private firebaseService: FirebaseService,
        private helperService: HelperService
    ) {
    }

    ngOnInit() {
        this.addCardForm = new FormGroup({
            title: new FormControl(undefined, [Validators.required]),
            description: new FormControl(undefined, [Validators.required])
        });
    }

    /**
     * Add new card
     */
    addCard() {
        if (this.addCardForm.valid) {
            // ToDo
        }
    }

    closeDialog(e?: any) {
        this.dialogRef.close(e);
    }

}
