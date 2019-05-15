import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CRUD, SetInterface } from '../models';
import { FirebaseService } from '../services/firebase.service';
import { SetDialogComponent } from './set-dialog/set-dialog.component';

@Component({
    selector: 'fc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    public setsLoading: boolean;

    public setsList: SetInterface[];

    public activeSet: SetInterface;

    constructor(
        private dialog: MatDialog,
        private firebaseService: FirebaseService
    ) {
    }

    ngOnInit() {
        this.getSets();
    }

    signOut() {
        this.firebaseService.signOut();
    }

    /**
     * Get user sets
     */
    private getSets() {
        this.setsLoading = true;
        this.firebaseService.getUserSets().subscribe(
            (data) => {
                if (data) {
                    this.setsList = data.map(actions => {
                        const id = actions.payload.doc.id;
                        const doc = actions.payload.doc.data();
                        return { id, ...doc };
                    });
                    // Make first set as active
                    if (!this.activeSet && this.setsList.length > 0) {
                        this.activeSet = this.setsList[0];
                    }
                }
                console.log(this.setsList);
                this.setsLoading = false;
            }, (err) => {
                console.log(err);
                this.setsLoading = false;
            });
    }

    public openAddSetDialog() {
        const dialogRef = this.dialog.open(SetDialogComponent, {
            data: {
                status: CRUD.CREATE,
                set: this.activeSet
            }
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                if (response.status === CRUD.CREATE) {
                    this.activeSet = this.setsList.find((a) => a.id === response.set.id);
                }
            }
        });
    }

    public openEditSetDialog() {
        const dialogRef = this.dialog.open(SetDialogComponent, {
            data: {
                status: CRUD.UPDATE,
                activeSet: this.activeSet
            }
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                if (response.status === CRUD.DELETE) {
                    this.activeSet = this.setsList[0];
                }
            }
        });
    }

    public makeSetActive(set: SetInterface) {
        this.activeSet = set;
    }

}
