import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService, 
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  noOnInit(): void {

    // Subscribe to Authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    );
  }
  getUserDetails() {
    if(this.isAuthenticated) {

      // Fetch the logged in user details (user's claims)

      // User full name is exposed as a propert name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;

          // retrieve the users email from authen ticatiom res p onse
          const theEmail = res.email;

          // Now store the email i  n browers storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
        }
      );
    }
  }

  logout() {
    // Terminates the session with okta and remove the current tokens
    this.oktaAuth.signOut();
  }
}
