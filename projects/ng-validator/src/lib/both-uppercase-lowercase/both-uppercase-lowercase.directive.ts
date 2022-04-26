import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { upperAndLowercase } from './validator';

@Directive({
  selector: '[upperAndLowercase][formControlName],[upperAndLowercase][formControl],[upperAndLowercase][ngModel]'
})
export class BothUppercaseLowercaseDirective {

  validate(c: AbstractControl): {[key: string]: any} | null {
    return upperAndLowercase(c);
  }

}
