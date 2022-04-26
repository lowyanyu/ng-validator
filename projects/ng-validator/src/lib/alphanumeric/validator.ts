import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export const alphaNumeric: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {

  if (typeof control === 'undefined' && control === null) {
    return null;
  }

  if (typeof control.value === 'undefined' || control.value === null || control.value.length  === 0) {
    return null;
  }

  const v: string = control.value;
  return /.*[a-zA-Z]+.*[0-9]+.*|.*[0-9]+.*[a-zA-Z]+.*/i.test(v) ? null : {alphaNumeric: true};
};
