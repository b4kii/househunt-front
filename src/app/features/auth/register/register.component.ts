import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthLayoutComponent } from '../../../layout/auth/auth-layout.component';
import { FormValidationService } from '../../../core/services/form-validation/form-validation.service';
import { FormErrorComponent } from '../../../shared/components/form-error/form-error';
import { RegisterForm } from '../../../shared/types/form.types';
import { ControlInput } from '../../../shared/types/validation.types';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "hh-register",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AuthLayoutComponent,
    FormErrorComponent,
    NgClass,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: "./ui/register.component.html",
})
export class RegisterComponent {
  protected isFormSubmitted: boolean = false;
  protected formValidationService = inject(FormValidationService);

  protected registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    repeatPassword: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
  });

  protected onSubmit() {
    this.isFormSubmitted = true;

    console.log(this.registerForm.getRawValue());
    this.registerForm.markAsTouched();
  }

  protected checkValidation(key: string) {
    return this.formValidationService.checkValidation(
      key,
      this.isFormSubmitted,
      this.registerForm
    );
  }

  formProps(key: keyof RegisterForm): ControlInput {
    return {
      control: this.registerForm.controls[key],
      isFormSubmitted: this.isFormSubmitted,
    };
  }
}
