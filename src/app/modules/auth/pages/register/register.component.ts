import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'hh-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.nonNullable.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    repeatPassword: ["", Validators.required],
    phone: ["", Validators.required],
  });

  protected onSubmit() {
    console.log(this.registerForm.getRawValue());
  }
}
