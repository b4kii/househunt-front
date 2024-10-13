import { Component } from "@angular/core";
import { InputErrorComponent } from "../../../shared/components/input-error/input-error.component";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthLayoutComponent } from "../../../layout/auth/auth-layout.component";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { NgClass } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: "hh-login",
  standalone: true,
  imports: [
    InputErrorComponent,
    ReactiveFormsModule,
    AuthLayoutComponent,
    InputTextModule,
    PasswordModule,
    NgClass,
    ButtonModule,
    DividerModule,
    RouterLink,
  ],
  templateUrl: "./ui/login.component.html",
})
export class LoginComponent {
  protected isFormSubmitted: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  protected onSubmit() {
    this.isFormSubmitted = true;

    console.log(this.loginForm.getRawValue());
    this.loginForm.markAsTouched();
  }

  protected checkValidation(
    key: keyof typeof this.loginForm.controls
  ): boolean {
    return (
      this.loginForm.controls[key].invalid &&
      (this.loginForm.controls[key].touched ||
        this.isFormSubmitted ||
        this.loginForm.controls[key].dirty)
    );
  }

  protected hasError(
    formKey: keyof typeof this.loginForm.controls,
    errorKey: string
  ): boolean {
    return this.loginForm.controls[formKey].errors?.[errorKey];
  }
}
