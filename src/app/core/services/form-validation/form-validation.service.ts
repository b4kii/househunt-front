import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { ValidationMessages } from "../../../shared/types/validation.types";

@Injectable({
  providedIn: "root",
})
export class FormValidationService {
  public checkValidation(
    key: string,
    isFormSubmitted: boolean,
    form: FormGroup
  ): boolean {
    return (
      form.controls[key].invalid &&
      (form.controls[key].touched ||
        isFormSubmitted ||
        form.controls[key].dirty)
    );
  }

  public getValidatorErrorMessage = (
    validatorName: string,
    validatorErrors?: ValidationErrors,
  ): string | undefined => {
    let args = this.messages
      .get(validatorName)
      ?.validatorErrorsKey?.map(name => validatorErrors?.[name]);
    return args
      ? this.stringFormat(this.messages.get(validatorName)?.message, ...args)
      : this.messages.get(validatorName)?.message;
  };

  protected stringFormat(template: string | undefined, ...args: any[]) {
    if (template) {
      return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== "undefined" ? args[index] : match;
      });
    }
    return undefined;
  }

  protected messages: ValidationMessages = new Map([
    ["required", { message: "Pole wymagane" }],
    [
      "minlength",
      {
        message: "Password must be at least {0} characters long",
        validatorErrorsKey: ["requiredLength"],
      },
    ],
    [
      "maxlength",
      {
        message: "Password cannot be more than {0} characters long",
        validatorErrorsKey: ["requiredLength"],
      },
    ],
    ["email", { message: "Nieprawidłowy adres email" }],
  ]);
}
