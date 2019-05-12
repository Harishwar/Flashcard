import { Component, Input } from '@angular/core';

@Component({
    selector: 'fc-progress-spinner',
    templateUrl: './progress-spinner.component.html'
})
export class ProgressSpinnerComponent {

    @Input()
    public loading: boolean;

}
