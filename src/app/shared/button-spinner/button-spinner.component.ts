import { Component, Input } from '@angular/core';

@Component({
    selector: 'fc-button-spinner',
    templateUrl: './button-spinner.component.html',
    styleUrls: ['./button-spinner.component.scss']
})
export class ButtonSpinnerComponent {

    @Input()
    public loading: boolean;

}
