import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { CardInterface, SetInterface } from '../models';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    public userId: string | null;

    constructor(
        private ngZone: NgZone,
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
    ) {
        /** Get current user id on page refresh */
        this.userId = localStorage.getItem('user') || null;
        this.afAuth.auth.onAuthStateChanged(
            (user) => {
                console.log(user);
                this.ngZone.run(() => {
                    this.userId = user ? user.uid : null;
                    if (this.userId) {
                        localStorage.setItem('user', this.userId);
                    } else {
                        localStorage.removeItem('user');
                    }
                });
            }, (err) => {
                console.log(err);
                this.ngZone.run(() => {
                    this.userId = null;
                    localStorage.removeItem('user');
                });
            });
    }

    /**
     * Sign in
     */
    signIn(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    /**
     * Create account
     */
    signUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    /**
     * Sign out
     */
    signOut() {
        this.afAuth.auth.signOut().catch((err) => console.warn(err));
    }

    /**
     * List of sets created by user
     */
    getUserSets() {
        return this.afs.collection<SetInterface>('sets', ref => {
            return ref.where('uid', '==', this.userId).orderBy('createdAt');
        }).snapshotChanges();
    }

    /**
     * Get set using id
     */
    getSet(setId: string) {
        if (!setId) {
            return;
        }
        return this.afs.collection<SetInterface>('sets').doc(setId).valueChanges();
    }


    /**
     * Create new set
     */
    createSet(name: string) {
        return this.afs.collection<SetInterface>('sets').add({
            name,
            uid: this.userId,
            createdAt: new Date()
        });
    }

    /**
     * Update set details
     * Only name can be edited
     */
    updateSet(setId: string, newName: string) {
        return this.afs.collection<SetInterface>('sets').doc(setId).update({
            name: newName,
            updatedAt: new Date()
        });
    }

    /**
     * Delete set
     */
    deleteSet(setId: string) {
        return this.afs.collection<SetInterface>('sets').doc(setId).delete();
    }

    /**
     * List of cards in a set
     */
    getCards(setId: string) {
        return this.afs.collection<SetInterface>('sets').doc(setId).collection<CardInterface>('cards', ref => {
            return ref.orderBy('order').orderBy('createdAt');
        }).snapshotChanges();
    }

    /**
     * Add new card to set
     */
    createCard(setId: string, card: CardInterface) {
        return this.afs.collection<SetInterface>('sets').doc(setId).collection<CardInterface>('cards').add({
            term: card.term,
            definition: card.definition,
            createdAt: new Date(),
            order: 10000 // Set high number initially
        });
    }

    /**
     * Update card details
     */
    updateCard(setId: string, card: CardInterface) {
        return this.afs.collection<SetInterface>('sets').doc(setId).collection<CardInterface>('cards').doc(card.id).update({
            term: card.term,
            definition: card.definition,
            updatedAt: new Date()
        });
    }

    /**
     * Update order of the cards
     */
    updateCardsOrder(setId: string, cardIdsWithOrder: object): void {
        const cardsCollection = this.afs.collection<SetInterface>('sets').doc(setId).collection<CardInterface>('cards');
        Object.keys(cardIdsWithOrder).forEach((cardId, index) => {
            cardsCollection.doc(cardId)
                .update({
                    order: index
                })
                .catch((err) => {
                    console.warn(err);
                });
        });
    }

    /**
     * Delete card
     */
    deleteCard(setId: string, cardId: string) {
        return this.afs.collection<SetInterface>('sets').doc(setId).collection<CardInterface>('cards').doc(cardId).delete();
    }

}
