import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinMaxLengthValidator(minLength : number, maxLength : number) : ValidatorFn | null{
  return (control : AbstractControl) => {
    let myValue : string = control.value
    if(myValue == null) return null;
    if(myValue.length < minLength) return {myError : 'string trop court'};
    if(myValue.length > maxLength) return {myError : 'string trop long'};
    return null;
  }
}
