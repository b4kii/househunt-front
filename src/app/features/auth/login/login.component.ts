import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from "../../../layout/auth/auth-layout.component";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { NgClass } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { FormValidationService } from '../../../core/services/form-validation/form-validation.service';
import { FormErrorComponent } from '../../../shared/components/form-error/form-error';
import { ControlInput } from '../../../shared/types/validation.types';
import { LoginForm } from '../../../shared/types/form.types';

@Component({
  selector: "hh-login",
  standalone: true,
  imports: [
    FormErrorComponent,
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
  protected formValidationService = inject(FormValidationService);

  protected loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  protected onSubmit() {
    this.isFormSubmitted = true;

    console.log(this.loginForm.getRawValue());
    this.loginForm.markAsTouched();
  }

  protected checkValidation(key: string) {
    return this.formValidationService.checkValidation(
      key,
      this.isFormSubmitted,
      this.loginForm
    );
  }

  formProps(key: keyof LoginForm): ControlInput {
    return {
      control: this.loginForm.controls[key],
      isFormSubmitted: this.isFormSubmitted
    };
  }
}
