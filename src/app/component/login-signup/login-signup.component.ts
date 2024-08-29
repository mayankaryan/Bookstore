import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  isLoginVisible = true;

  login!: FormGroup;
  signup!: FormGroup;

  constructor(private fb:FormBuilder,private userservive:UserService,private loginService: LoginService,private router: Router) {

  }
  ngOnInit() {
    this.signup = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.required]],
      password: ['', Validators.required],
      mobileno: ['', Validators.required]

    })
  }

  signUp(){
    const data={
      fullName:this.signup.get("fullname")?.value,
      email:this.signup.get("email")?.value,
      password:this.signup.get("password")?.value,
      phone:this.signup.get("mobileno")?.value
    }
    this.userservive.register("/bookstore_user/registration",data).subscribe({
      next:(res)=>{
        console.log(res);
        this.isLoginVisible=true;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{

      }
    })
  }


  loginObj: FormGroup = new FormGroup({
    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

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
