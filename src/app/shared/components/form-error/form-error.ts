import { Component, inject, Input } from '@angular/core';
import { FormValidationService } from '../../../core/services/form-validation/form-validation.service';
import { ControlInput } from '../../types/validation.types';
import { NgIf } from '@angular/common';

@Component({
  selector: "hh-form-error",
  standalone: true,
  template: `
    <ng-container *ngIf="errorMessage !== null">
      <div class="text-red-500">
        <small>
          {{ errorMessage }}
        </small>
      </div>
    </ng-container>
  `,
  imports: [NgIf],
})
export class FormErrorComponent {
  @Input() controlInput!: ControlInput;

  protected formValidationService = inject(FormValidationService);

  get errorMessage() {
    for (const validatorName in this.controlInput.control?.errors) {
      if (
        this.controlInput.control.invalid &&
        (this.controlInput.control.touched || this.controlInput.control.dirty || this.controlInput.isFormSubmitted)
      )
        return this.formValidationService.getValidatorErrorMessage(
          validatorName,
          this.controlInput.control.errors[validatorName]
        );
    }
    return null;
  }
}
