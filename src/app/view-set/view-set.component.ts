import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import gql from 'graphql-tag';

import { getSet } from '../../graphql/queries';
import { AppSyncResponse, FetchPolicy, SetInterface } from '../models';
import { AppSyncService } from '../services/app-sync.service';
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
        private dialog: MatDialog,
        private appSyncService: AppSyncService
    ) {
        activatedRoute.params.subscribe((params) => {
            this.getSet(params.id);
        });
    }

    private getSet(setId: string) {
        if (!setId) {
            this.redirectToHomepage();
        }
        this.isLoading = true;
        this.appSyncService.appSyncClient
            .query({
                fetchPolicy: FetchPolicy.NetworkOnly,
                query: gql(getSet),
                variables: {
                    id: setId
                }
            })
            .then((res: AppSyncResponse) => {
                console.log(res);
                this.isLoading = false;
                if (res.data && res.data.getSet) {
                    this.set = res.data.getSet;
                } else {
                    this.redirectToHomepage();
                }
            })
            .catch((err) => {
                console.warn(err);
                this.isLoading = false;
                this.redirectToHomepage();
            });
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
