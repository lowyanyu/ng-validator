import { AbstractControl, ValidatorFn } from '@angular/forms';

export const equal = (val: any): ValidatorFn => {

  return (control: AbstractControl): {[key: string]: any} | null => {

    if (typeof control === 'undefined' && control === null) {
      return null;
    }

    const v: any = control.value;

    return val === v ? null : {equal: true};
  };
};
