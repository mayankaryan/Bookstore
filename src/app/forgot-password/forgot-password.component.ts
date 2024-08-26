import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgot: FormGroup;
  constructor(private fb: FormBuilder) {
    this.forgot = this.fb.group({
      email: ['', Validators.required, Validators.email]
    })
  }
}

