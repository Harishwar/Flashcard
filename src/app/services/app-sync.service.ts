import { Injectable } from '@angular/core';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import { AmplifyService } from 'aws-amplify-angular';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import awsConfig from '../../aws-exports';

@Injectable()
export class AppSyncService {
    public appSyncClient: AWSAppSyncClient<NormalizedCacheObject>;

    constructor(private amplifyService: AmplifyService) {
        this.appSyncClient = new AWSAppSyncClient({
            url: awsConfig.aws_appsync_graphqlEndpoint,
            region: awsConfig.aws_appsync_region,
            auth: {
                type: AUTH_TYPE.AWS_IAM,
                credentials: () => this.amplifyService.auth().currentCredentials()
                // Auth.currentCredentials()
                // jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken()
            }
        });
    }
}
