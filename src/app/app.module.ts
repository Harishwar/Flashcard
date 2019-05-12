import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule, MatDialogModule, MatDividerModule, MatIconModule,
    MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppSyncService } from './services/app-sync.service';
import { SignInFormComponent } from './sign-in/sign-in-form/sign-in-form.component';
import { SignInPageComponent } from './sign-in/sign-in-page/sign-in-page.component';
import { SignInDialogComponent } from './sign-in/sign-in-dialog/sign-in-dialog.component';
import { ViewSetComponent } from './view-set/view-set.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ButtonSpinnerComponent } from './button-spinner/button-spinner.component';

const APP_PROVIDERS = [
    AmplifyService,
    AppSyncService,
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useFactory: () => {
            return {
                autoFocus: false,
                hasBackdrop: true,
                disableClose: false,
                closeOnNavigation: true
            };
        }
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignInPageComponent,
        SignInFormComponent,
        SignInDialogComponent,
        ViewSetComponent,
        DashboardComponent,
        ProgressSpinnerComponent,
        ButtonSpinnerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AmplifyAngularModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        MatToolbarModule
    ],
    providers: [
        APP_PROVIDERS
    ],
    entryComponents: [
        SignInDialogComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
