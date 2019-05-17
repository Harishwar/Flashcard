import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CardInterface, CRUD, SetInterface } from '../models';
import { FirebaseService } from '../services/firebase.service';
import { SetDialogComponent } from './set-dialog/set-dialog.component';
import { ShareSetDialogComponent } from './share-set-dialog/share-set-dialog.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';

@Component({
    selector: 'fc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    public setsList: SetInterface[];
    public activeSet: SetInterface;
    public setsLoading: boolean;
    public cardsLoading: boolean;

    constructor(
        private dialog: MatDialog,
        private firebaseService: FirebaseService
    ) {
    }

    ngOnInit() {
        this.getSets();
    }

    signOut() {
        this.firebaseService.signOut()
            .catch((err) => console.warn(err));
    }

    /**
     * Get list of user sets
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
                        this.makeSetActive(this.setsList[0]);
                    }
                }
                this.setsLoading = false;
            }, (err) => {
                console.warn(err);
                this.setsLoading = false;
            });
    }

    /**
     * Open add set dialog
     */
    addSet() {
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

    /**
     * Open Edit/Delete set dialog
     */
    editSet() {
        const dialogRef = this.dialog.open(SetDialogComponent, {
            data: {
                status: CRUD.UPDATE,
                activeSet: this.activeSet
            }
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                if (response.status === CRUD.UPDATE && response.set) {
                    this.activeSet.name = response.set.name;
                } else if (response.status === CRUD.DELETE) {
                    this.activeSet = this.setsList[0];
                }
            }
        });
    }

    /**
     * Share set URL
     */
    shareSet() {
        this.dialog.open(ShareSetDialogComponent, {
            data: this.activeSet
        });
    }

    /**
     * Make set active and get cards
     */
    makeSetActive(set: SetInterface) {
        this.activeSet = set;
        this.getCards(this.activeSet.id);
    }

    /**
     * Get list of cards in a set
     */
    private getCards(setId: string) {
        this.cardsLoading = true;
        this.firebaseService.getCards(setId).subscribe(
            (data) => {
                if (data) {
                    this.activeSet.cards = data.map(actions => {
                        const id = actions.payload.doc.id;
                        const doc = actions.payload.doc.data();
                        return { id, ...doc };
                    });
                }
                this.cardsLoading = false;
            }, (err) => {
                console.warn(err);
                this.cardsLoading = false;
            });
    }

    /**
     * Open add set dialog
     */
    addCard() {
        const dialogRef = this.dialog.open(CardDialogComponent, {
            data: {
                status: CRUD.CREATE,
                setId: this.activeSet.id
            }
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                if (response.status === CRUD.CREATE) {
                    // this.activeSet.cards.push(response.card);
                    this.getCards(this.activeSet.id);
                }
            }
        });
    }

    /**
     * Open Edit/Delete set dialog
     */
    editCard(card: CardInterface) {
        const dialogRef = this.dialog.open(CardDialogComponent, {
            data: {
                status: CRUD.UPDATE,
                setId: this.activeSet.id,
                card
            }
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                if (response.status === CRUD.UPDATE || response.status === CRUD.DELETE) {
                    this.getCards(this.activeSet.id);
                }
            }
        });
    }

}
