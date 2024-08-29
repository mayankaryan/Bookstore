import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  isLoginVisible = true;

  showLogin() {
    this.isLoginVisible = true;
  }

  showSignup() {
    this.isLoginVisible = false;
  }

  login!: FormGroup;
  signup!: FormGroup;

  constructor(private fb: FormBuilder,private userservive:UserService) {

  }
  ngOnInit() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
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



}
