import { Directive, forwardRef, OnInit, Input } from '@angular/core';
import { equalTo } from './validator';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

const EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualToDirective),
  multi: true
};

@Directive({
  selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
  providers: [EQUAL_TO_VALIDATOR]
})

export class EqualToDirective implements Validator, OnInit {

  @Input() equalTo: FormControl | any;;

  private validator: ValidatorFn = () => null;

  constructor() { }

  ngOnInit() {
    this.validator = equalTo(this.equalTo);
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.validator(control);
  }

}
