import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { forwardRef, Directive, OnInit, Input } from '@angular/core';
import { notEqualTo } from './validator';

const NOT_EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualToDirective),
  multi: true
};

@Directive({
  selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
  providers: [NOT_EQUAL_TO_VALIDATOR]
})

export class NotEqualToDirective implements Validator, OnInit {

  @Input() equalTo: FormControl | any;

  private validator: ValidatorFn;

  constructor() {
    this.validator = notEqualTo(this.equalTo);
  }

  ngOnInit() {
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.validator(control);
  }

}
