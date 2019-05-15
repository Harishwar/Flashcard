import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { SetInterface } from '../models';

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
        return this.afs.collection('sets').add({
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
        return this.afs.collection('users').doc(setId).set({
            name: newName,
            updatedAt: new Date()
        });
    }

    /**
     * Delete set
     */
    deleteSet(setId: string) {
        return this.afs.collection('sets').doc(setId).delete();
    }

    signUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signOut() {
        this.afAuth.auth.signOut().catch((err) => console.warn(err));
    }

}
