import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { FirebaseService } from '../../services/firebase.service';
import { HelperService } from '../../services/helper.service';
import { CardInterface, CRUD } from '../../models';

@Component({
    templateUrl: 'card-dialog.component.html',
    styleUrls: ['./card-dialog.component.scss']
})

export class CardDialogComponent implements OnInit {

    public cardForm: FormGroup;
    public isUpdating: boolean;
    public isDeleting: boolean;
    public setId: string;
    public card: CardInterface;

    constructor(
        private dialogRef: MatDialogRef<CardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private snackBar: MatSnackBar,
        private firebaseService: FirebaseService,
        private helperService: HelperService
    ) {
    }

    ngOnInit() {
        if (this.data) {
            this.setId = this.data.setId;
            if (this.data.status === CRUD.UPDATE) {
                this.card = JSON.parse(JSON.stringify(this.data.card));
            }
        }

        this.cardForm = new FormGroup({
            term: new FormControl(this.card ? this.card.term : undefined, [Validators.required]),
            definition: new FormControl(this.card ? this.card.definition : undefined, [Validators.required])
        });
    }

    /**
     * Add or update card
     */
    addOrUpdateCard() {
        if (this.cardForm.valid) {
            this.isUpdating = true;
            if (this.data.status === CRUD.UPDATE) {
                this.card.term = this.cardForm.get('term').value;
                this.card.definition = this.cardForm.get('definition').value;
                this.firebaseService.updateCard(this.setId, this.card)
                    .then((data) => {
                        this.isUpdating = false;
                        this.closeDialog({
                            status: CRUD.UPDATE,
                            card: data
                        });
                    })
                    .catch((err) => {
                        if (err && err.message) {
                            this.helperService.showMessage(err.message);
                        }
                        this.isUpdating = false;
                    });
            } else {
                const card: CardInterface = {
                    term: this.cardForm.get('term').value,
                    definition: this.cardForm.get('definition').value
                };
                this.firebaseService.createCard(this.setId, card)
                    .then((data) => {
                        this.isUpdating = false;
                        this.closeDialog({
                            status: CRUD.CREATE,
                            card: data
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
     * Delete card
     */
    deleteCard() {
        if (this.card && this.card.id) {
            this.isDeleting = true;
            this.firebaseService.deleteCard(this.setId, this.card.id)
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
