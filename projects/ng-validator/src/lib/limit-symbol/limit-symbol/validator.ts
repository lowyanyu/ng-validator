import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export const limitSymbol: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {

  if (typeof control === 'undefined' && control === null) {
    return null;
  }

  if (typeof control.value === 'undefined' || control.value === null || control.value.length  === 0) {
    return null;
  }

  const v: string = control.value;
  return /^[^<>\'";]*$/.test(v) ? null : {limitSymbol: true} ;
};
