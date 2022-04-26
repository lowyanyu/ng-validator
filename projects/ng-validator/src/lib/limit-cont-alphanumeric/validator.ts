import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export const limitContAlphaNumeric = (max: number): ValidatorFn => {

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

    const regux = new RegExp('[a-zA-Z]{' + max + '}|[0-9]{' + max + '}');
    return regux.test(v) ? {limitConAlphaNumeric: true} : null;
  };
};
