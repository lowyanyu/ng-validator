import { Input, OnInit, OnChanges, Directive, forwardRef, SimpleChanges } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';
import { limitRepcontAlphaNumeric } from './validator';

const LIMITREPCONALPHANUMERIC_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LimitRepcontAlphanumericValidator),
  multi: true
};

@Directive({
  selector: '[limitContAlphaNumeric][formControlName],[limitContAlphaNumeric][formControl],[limitContAlphaNumeric][ngModel]',
  providers: [LIMITREPCONALPHANUMERIC_VALIDATOR]
})
export class LimitRepcontAlphanumericValidator implements Validator, OnInit, OnChanges {

  @Input() min: number | any;

  private validator: ValidatorFn = () => null;
  private onChange: () => void = () => {};

  ngOnInit() {
    this.validator = limitRepcontAlphaNumeric(this.min);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'limitRepcontAlphaNumeric') {
        this.validator = limitRepcontAlphaNumeric(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} | null {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
