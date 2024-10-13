import { Component } from '@angular/core';
import {InputErrorComponent} from '../../../shared/components/input-error/input-error.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthLayoutComponent} from '../../../layout/auth/auth-layout.component';

@Component({
  selector: 'hh-login',
  standalone: true,
  imports: [
    InputErrorComponent,
    ReactiveFormsModule,
    AuthLayoutComponent,
  ],
  templateUrl: './ui/login.component.html',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  })

  protected onSubmit() {
    console.log(this.loginForm.getRawValue());
  }
}
