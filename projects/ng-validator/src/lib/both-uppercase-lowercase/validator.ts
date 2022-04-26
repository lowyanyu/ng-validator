import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export const upperAndLowercase: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {

  if (typeof control === 'undefined' && control === null) {
    return null;
  }

  if (typeof control.value === 'undefined' || control.value === null || control.value.length  === 0) {
    return null;
  }

  const v: string = control.value;
  return /(?=.*[a-z])(?=.*[A-Z]).{1,}/g.test(v) ? null : {upperAndLowercase: true};
};
