import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export const limitFullwidth: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {

  if (typeof control === 'undefined' && control === null) {
    return null;
  }

  if (typeof control.value === 'undefined' || control.value === null || control.value.length  === 0) {
    return null;
  }

  const v: string = control.value;
  return /^[^\uFF10-\uFF19|\uFF41-\uFF5A|\uFF21-\uFF3A]*$/.test(v) ? null : {limitFullwidth: true} ;
};
