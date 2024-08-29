import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  isLoginVisible: boolean = true;
  loginObj: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) { }

  onLogin() {
    console.log(this.loginObj.value);
    this.loginService.postLogin(
      {
        "email": this.loginObj.value.email,
        "password": this.loginObj.value.password,
      }).subscribe({
        next: (res: any) => {
          console.log('login', res);
          localStorage.setItem('access-token', res.result.accessToken);
        },
        error: (err: any) => {
          console.log(err);
        }
      })

  }

  showLogin() {
    this.isLoginVisible = true;
  }

  showSignup() {
    this.isLoginVisible = false;
  }
}
