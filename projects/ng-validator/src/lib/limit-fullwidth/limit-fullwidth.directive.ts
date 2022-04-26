import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forwardRef, Directive } from '@angular/core';
import { limitFullwidth } from './validator';

const LIMITSYMBOL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LimitFullwidthDirective),
  multi: true
};

@Directive({
  selector: '[limitFullwidth][formControlName],[limitFullwidth][formControl],[limitFullwidth][ngModel]',
  providers: [LIMITSYMBOL_VALIDATOR]
})

export class LimitFullwidthDirective implements Validator {

  validate(c: AbstractControl): {[key: string]: any} | null {
    return limitFullwidth(c);
  }

}
