import { Component } from '@angular/core';
import gql from 'graphql-tag';

import { FetchPolicy } from './models';
import { getSet } from '../graphql/queries';
import { AppSyncService } from './services/app-sync.service';

@Component({
    selector: 'fc-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

    constructor(public appSyncService: AppSyncService) {
    }

    public get(setId: string) {
        this.appSyncService.appSyncClient
            .watchQuery({
                fetchPolicy: FetchPolicy.NetworkOnly,
                query: gql(getSet),
                variables: {
                    id: setId
                }
            })
            .subscribe((data) => {
                console.log(data);
            }, (err) => {
                console.warn(err);
            });
    }

}
