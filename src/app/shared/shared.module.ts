import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

import { ButtonSpinnerComponent } from './button-spinner/button-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
    declarations: [
        ButtonSpinnerComponent,
        ProgressBarComponent,
        ProgressSpinnerComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        ButtonSpinnerComponent,
        ProgressBarComponent,
        ProgressSpinnerComponent
    ]
})

export class SharedModule {
}
