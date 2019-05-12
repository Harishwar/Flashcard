import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import aws_exports from './aws-exports';

/** Override authentication type to query data without sign in */
const amplifyConfig = { ...aws_exports, aws_appsync_authenticationType: 'AWS_IAM' };
Amplify.configure(amplifyConfig);

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
