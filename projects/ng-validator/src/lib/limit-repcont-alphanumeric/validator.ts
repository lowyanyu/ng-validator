import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export const limitRepcontAlphaNumeric = (max: number): ValidatorFn => {

  return (control: AbstractControl): {[key: string]: any} | null => {

    if (typeof control === 'undefined' && control === null) {
      return null;
    }

    if (max === undefined && null === max) {
      return null;
    }

    if (typeof control.value === 'undefined' || control.value === null || control.value.length  === 0) {
      return null;
    }

    const v: any = control.value;

    const regux = new RegExp('([a-zA-z0-9])*([a-zA-z0-9])\\2{' +  (max - 1) + '}([a-zA-z0-9])*');
    return regux.test(v) ? {limitRepcontAlphaNumeric: true} : null;
  };
};
