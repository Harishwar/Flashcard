import { Component } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'fc-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(public firebaseService: FirebaseService) {
    }

}
