import { FormControl } from '@angular/forms';

export type LoginForm = {
  email: FormControl<string | null>,
  password: FormControl<string | null>,
}

export type RegisterForm = {
  email: FormControl<string | null>,
  password: FormControl<string | null>,
  repeatPassword: FormControl<string | null>,
  phone: FormControl<string | null>,
}
