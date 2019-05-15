import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { SetInterface } from '../models';
import { SignInDialogComponent } from '../sign-in/sign-in-dialog/sign-in-dialog.component';

@Component({
    templateUrl: './view-set.component.html',
    styleUrls: ['./view-set.component.scss']
})

export class ViewSetComponent {

    public isLoading: boolean;
    public set: SetInterface;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog
    ) {
        activatedRoute.params.subscribe((params) => {
            // this.getSet(params.id);
        });
    }

    private getSet(setId: string) {
        if (!setId) {
            this.redirectToHomepage();
        }
        // ToDo
    }

    private redirectToHomepage() {
        this.router.navigateByUrl('/')
            .catch((err) => console.warn(err));
    }

    public openSignInDialog() {
        const dialogRef = this.dialog.open(SignInDialogComponent);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.redirectToHomepage();
            }
        });
    }

}
