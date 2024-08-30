import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
  animations: [trigger('fade', [state('faded', style({ opacity: 0.5 })), state('normal', style({
    opacity: 1
  })), transition('normal => faded', [
    animate('0.5s')
  ]), transition('faded => normal', [
    animate('0.5s')
  ])])]
})
export class LoginSignupComponent {
  check: boolean = true;
  isLoginVisible = true;
  isSignupHovered = false;
  loginState = !this.isLoginVisible ? 'faded' : 'normal';
  signupState = this.isLoginVisible ? 'faded' : 'normal';


  fadeLogin() {
    this.loginState = 'faded';
    this.signupState = 'normal';

  }
  fadeSignup() {
    this.signupState = 'faded';
    this.loginState = 'normal';
  }
  onSignupClick() {
    this.isSignupHovered = true;
  }


  showLogin() {
    this.isLoginVisible = true;
  }

  showSignup() {
    this.isLoginVisible = false;
  }


}
