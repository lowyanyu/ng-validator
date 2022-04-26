import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forwardRef, Directive } from '@angular/core';
import { limitSymbol } from './validator';

const LIMITSYMBOL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LimitSymbolDirective),
  multi: true
};

@Directive({
  selector: '[limitSymbol][formControlName],[limitSymbol][formControl],[limitSymbol][ngModel]',
  providers: [LIMITSYMBOL_VALIDATOR]
})

export class LimitSymbolDirective implements Validator {

  validate(c: AbstractControl): {[key: string]: any} | null {
    return limitSymbol(c);
  }

}
