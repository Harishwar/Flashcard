import { Component, Input } from '@angular/core';

@Component({
    selector: 'fc-progress-bar',
    templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {

    @Input()
    public loading: boolean;

}
