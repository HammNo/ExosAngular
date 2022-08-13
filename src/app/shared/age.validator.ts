import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValidator(minAge : number) : ValidatorFn | null{
  return (control : AbstractControl) => {
    let birthDate : Date = control.value;
    if (birthDate) {
      let timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      if(age < minAge) return {ageError : 'Vous devez avoir ' + minAge + ' ans minimum'};
    }
    return null;
  }
}
