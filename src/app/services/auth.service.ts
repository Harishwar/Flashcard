import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public signedIn: boolean;

    private jwtToken: string; // ToDo: Remove

    constructor(private amplifyService: AmplifyService) {
        /** Get sign in status on page refresh */
        this.signedIn =
            Object.keys(window.localStorage || {}).filter(key =>
                key.startsWith('CognitoIdentityServiceProvider')
            ).length > 1;

        this.amplifyService.authStateChange$.subscribe(
            authState => {
                console.log('AuthState:', authState);
                this.signedIn = authState.state === 'signedIn';
                if (this.signedIn) {
                    const signInUserSession = authState.user.signInUserSession;
                    this.jwtToken = signInUserSession ? signInUserSession.idToken.jwtToken : '';
                } else {
                    this.jwtToken = '';
                }
            },
            () => {
                this.signedIn = false;
                this.jwtToken = '';
            }
        );
    }

    public signUp(email: string, password: string) {
        email = email.toLowerCase();
        return this.amplifyService.auth().signUp({
            username: email,
            password,
            attributes: {
                email
            }
        });
    }

    public signIn(email: string, password: string) {
        return this.amplifyService.auth().signIn(email.toLowerCase(), password);
    }

    public signOut() {
        this.amplifyService.auth().signOut();
    }

}
