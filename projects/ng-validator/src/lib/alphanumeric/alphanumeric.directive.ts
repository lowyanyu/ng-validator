import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forwardRef, Directive } from '@angular/core';
import { alphaNumeric } from './validator';

const ALPHANUMERIC_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => AlphaNumericDirective),
  multi: true
};

@Directive({
  selector: '[alphaNumeric][formControlName],[alphaNumeric][formControl],[alphaNumeric][ngModel]',
  providers: [ALPHANUMERIC_VALIDATOR]
})

export class AlphaNumericDirective implements Validator {

  validate(c: AbstractControl): {[key: string]: any} | null {
    return alphaNumeric(c);
  }

}
