import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { InputErrorComponent } from "../../../shared/components/input-error/input-error.component";

@Component({
  selector: "hh-register",
  standalone: true,
  imports: [ReactiveFormsModule, InputErrorComponent],
  templateUrl: "./ui/register.component.html",
})
export class RegisterComponent {
  value: string | undefined;

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    repeatPassword: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
  });

  protected onSubmit() {
    console.log(this.registerForm.getRawValue());
  }
}
