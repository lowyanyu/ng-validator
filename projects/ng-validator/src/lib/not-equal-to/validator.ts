import { AbstractControl, ValidatorFn } from '@angular/forms';

export const notEqualTo = (equalControl: AbstractControl): ValidatorFn => {

  let subscribe = false;

  return (control: AbstractControl): {[key: string]: boolean} | null => {
    if (!subscribe) {
      subscribe = true;
      equalControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v: string = control.value;

    return equalControl.value === v ? {notEqualTo: true} : null;
  };
};
