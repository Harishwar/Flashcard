import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'fc-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(
        private bodyTitle: Title,
        public firebaseService: FirebaseService
    ) {
        this.bodyTitle.setTitle(`Flashcard App`);
    }

}
