import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  isLoginVisible: boolean = true;
  loginObj: FormGroup = new FormGroup({
    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) { }

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
          this.router.navigate([''])
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
