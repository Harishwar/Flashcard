import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'fc-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent implements OnInit {

    public signInForm: FormGroup;
    public signInLoading: boolean;

    @Output()
    public signIn = new EventEmitter<boolean>();

    constructor(public firebaseService: FirebaseService) {
    }

    ngOnInit() {
        this.signInForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
        });
    }

    submitForm() {
        if (this.signInForm.valid) {
            this.signInLoading = true;
            this.firebaseService.signIn(
                this.signInForm.get('email').value,
                this.signInForm.get('password').value
            ).then((data) => {
                this.signInLoading = false;
                this.signIn.emit(true);
            }).catch((err) => {
                console.warn(err);
                this.signInForm.setErrors({ serverResponse: err.message });
                this.signInLoading = false;
            });
        }
    }

}
