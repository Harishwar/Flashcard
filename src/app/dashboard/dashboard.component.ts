import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'fc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    signOut() {
        this.authService.signOut();
    }
}
