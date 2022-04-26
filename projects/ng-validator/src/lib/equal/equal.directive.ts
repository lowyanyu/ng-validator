import { Directive, forwardRef, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { equal } from './validator';
import { NG_VALIDATORS, ValidatorFn, Validator, AbstractControl, FormControl } from '@angular/forms';


const EQUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualDirective),
  multi: true
};

@Directive({
  selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
  providers: [EQUAL_VALIDATOR]
})

export class EqualDirective implements Validator, OnInit, OnChanges {

  @Input() equal: FormControl | any;

  private validator: ValidatorFn = () => null;

  constructor() { }

  ngOnInit() {
    this.validator = equal(this.equal);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'equal') {
        this.validator = equal(changes[key].currentValue);
      }
    }
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.validator(control);
  }

}
