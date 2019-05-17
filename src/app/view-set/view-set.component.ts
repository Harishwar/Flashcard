import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { CardInterface, SetInterface } from '../models';
import { FirebaseService } from '../services/firebase.service';
import { SignInDialogComponent } from '../sign-in/sign-in-dialog/sign-in-dialog.component';

@Component({
    templateUrl: './view-set.component.html',
    styleUrls: ['./view-set.component.scss']
})

export class ViewSetComponent {

    public isLoading: boolean;
    public set: SetInterface;

    public activeCard: CardInterface | null;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private firebaseService: FirebaseService
    ) {
        activatedRoute.params.subscribe((params) => {
            this.getSet(params.id);
        });
    }

    /**
     * Get set and cards
     */
    private getSet(setId: string) {
        if (!setId) {
            this.redirectToHomepage();
        }
        this.isLoading = true;
        this.firebaseService.getSet(setId).subscribe(
            (setData) => {
                if (setData) {
                    this.set = setData as SetInterface;
                    if (setData) {
                        this.firebaseService.getCards(setId).subscribe(
                            (cardsData) => {
                                if (cardsData) {
                                    this.set.cards = cardsData.map((actions, index) => {
                                        const id = actions.payload.doc.id;
                                        const doc = actions.payload.doc.data();
                                        return { id, index, ...doc };
                                    });
                                }
                                // Select first card
                                if (this.set.cards.length > 0) {
                                    this.selectFirstCard();
                                }
                                this.isLoading = false;
                            }, (err) => {
                                console.warn(err);
                                this.isLoading = false;
                            });
                    } else {
                        this.isLoading = false;
                    }
                } else {
                    this.redirectToHomepage();
                }
            }, (err) => {
                console.warn(err);
                this.isLoading = false;
            });
    }

    private redirectToHomepage() {
        this.router.navigateByUrl('/')
            .catch((err) => console.warn(err));
    }

    signOut() {
        this.firebaseService.signOut()
            .then(() => this.redirectToHomepage())
            .catch((err) => console.warn(err));
    }

    openSignInDialog() {
        const dialogRef = this.dialog.open(SignInDialogComponent);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.redirectToHomepage();
            }
        });
    }

    /**
     * Select random card
     */
    selectRandomCard() {
        this.makeCardActive(Math.floor(Math.random() * this.set.cards.length));
    }

    /**
     * Select next card
     */
    selectNextCard() {
        this.makeCardActive(this.activeCard.index + 1);

    }

    /**
     * Select first card
     */
    selectFirstCard() {
        this.makeCardActive(0);
    }

    /**
     * Select last card
     */
    selectLastCard() {
        this.makeCardActive(this.set.cards.length - 1);
    }

    /**
     * Select previous card
     */
    selectPreviousCard() {
        this.makeCardActive(this.activeCard.index - 1);
    }

    /**
     * Select card with given index
     */
    private makeCardActive(index) {
        if (index >= 0 && index < this.set.cards.length) {
            this.activeCard = null;
            setTimeout(() => {
                this.activeCard = JSON.parse(JSON.stringify(this.set.cards[index]));
                this.activeCard.index = index;
            });
        }
    }
}
