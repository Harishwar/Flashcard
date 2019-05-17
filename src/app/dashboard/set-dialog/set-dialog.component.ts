import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { CRUD, SetInterface } from '../../models';
import { FirebaseService } from '../../services/firebase.service';
import { HelperService } from '../../services/helper.service';

@Component({
    templateUrl: 'set-dialog.component.html'
})

export class SetDialogComponent implements OnInit {

    public setForm: FormGroup;
    public isUpdating: boolean;
    public isDeleting: boolean;

    public set: SetInterface;

    constructor(
        private dialogRef: MatDialogRef<SetDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private snackBar: MatSnackBar,
        private firebaseService: FirebaseService,
        private helperService: HelperService
    ) {
    }

    ngOnInit() {
        // Update set value to edit and delete
        if (this.data && this.data.status === CRUD.UPDATE) {
            this.set = this.data.activeSet;
        }

        this.setForm = new FormGroup({
            name: new FormControl(this.set ? this.set.name : undefined, [Validators.required])
        });
    }

    /**
     * Add or update set
     */
    addOrUpdateSet() {
        if (this.setForm.valid) {
            this.isUpdating = true;
            if (this.data.status === CRUD.UPDATE) {
                this.firebaseService.updateSet(this.set.id, this.setForm.get('name').value)
                    .then((data) => {
                        this.isUpdating = false;
                        this.set.name = this.setForm.get('name').value;
                        this.closeDialog({
                            status: CRUD.UPDATE,
                            set: this.set
                        });
                    })
                    .catch((err) => {
                        if (err && err.message) {
                            this.helperService.showMessage(err.message);
                        }
                        this.isUpdating = false;
                    });
            } else {
                this.firebaseService.createSet(this.setForm.get('name').value)
                    .then((data) => {
                        this.isUpdating = false;
                        this.closeDialog({
                            status: CRUD.CREATE,
                            set: data
                        });
                    })
                    .catch((err) => {
                        if (err && err.message) {
                            this.helperService.showMessage(err.message);
                        }
                        this.isUpdating = false;
                    });
            }
        }
    }

    /**
     * Delete set
     */
    deleteSet() {
        if (this.set && this.set.id) {
            this.isDeleting = true;
            this.firebaseService.deleteSet(this.set.id)
                .then((data) => {
                    this.isDeleting = false;
                    this.closeDialog({
                        status: CRUD.DELETE
                    });
                })
                .catch((err) => {
                    if (err && err.message) {
                        this.helperService.showMessage(err.message);
                    }
                    this.isDeleting = false;
                });
        }
    }

    closeDialog(e?: any) {
        this.dialogRef.close(e);
    }

}
