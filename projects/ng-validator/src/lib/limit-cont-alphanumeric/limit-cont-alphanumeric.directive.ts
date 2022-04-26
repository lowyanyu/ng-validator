import { Input, OnInit, OnChanges, Directive, forwardRef, SimpleChanges } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';
import { limitContAlphaNumeric } from './validator';

const LIMITCONALPHANUMERIC_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LimitContAlphanumericValidator),
  multi: true
};

@Directive({
  selector: '[limitContAlphaNumeric][formControlName],[limitContAlphaNumeric][formControl],[limitContAlphaNumeric][ngModel]',
  providers: [LIMITCONALPHANUMERIC_VALIDATOR]
})
export class LimitContAlphanumericValidator implements Validator, OnInit, OnChanges {

  @Input() min: number | any;

  private validator: ValidatorFn = () => null;
  private onChange: () => void = () => {};

  constructor() { }

  ngOnInit() {
    this.validator = limitContAlphaNumeric(this.min);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'limitContAlphaNumeric') {
        this.validator = limitContAlphaNumeric(changes[key].currentValue);
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
