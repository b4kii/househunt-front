import { AbstractControl } from '@angular/forms';

export type ValidationMessages = Map<string, { message: string; validatorErrorsKey?: string[] }>;

export type ControlInput = {
  control: AbstractControl,
  isFormSubmitted: boolean
}
