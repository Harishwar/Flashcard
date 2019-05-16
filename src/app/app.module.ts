import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { ClipboardModule } from 'ngx-clipboard';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SignInFormComponent } from './sign-in/sign-in-form/sign-in-form.component';
import { SignInPageComponent } from './sign-in/sign-in-page/sign-in-page.component';
import { SignInDialogComponent } from './sign-in/sign-in-dialog/sign-in-dialog.component';
import { ViewSetComponent } from './view-set/view-set.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetDialogComponent } from './dashboard/set-dialog/set-dialog.component';
import { ShareSetDialogComponent } from './dashboard/share-set-dialog/share-set-dialog.component';
import { CardDialogComponent } from './dashboard/card-dialog/card-dialog.component';

const APP_PROVIDERS = [
    { provide: StorageBucket, useValue: 'flashcard-f874a' },
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
        SetDialogComponent,
        ShareSetDialogComponent,
        CardDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        ClipboardModule,
        FlexLayoutModule,
        DragDropModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule,
        SharedModule
    ],
    providers: [
        APP_PROVIDERS
    ],
    entryComponents: [
        SignInDialogComponent,
        SetDialogComponent,
        ShareSetDialogComponent,
        CardDialogComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
