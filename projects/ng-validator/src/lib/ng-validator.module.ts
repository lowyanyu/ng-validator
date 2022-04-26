import { NgModule } from '@angular/core';
import { EqualDirective } from './equal/equal.directive';
import { EqualToDirective } from './equal-to/equal-to.directive';
import { AlphaNumericDirective } from './alphanumeric/alphanumeric.directive';
import { LimitSymbolDirective } from './limit-symbol/limit-symbol/limit-symbol.directive';
import { LimitFullwidthDirective } from './limit-fullwidth/limit-fullwidth.directive';
import { LimitContAlphanumericValidator } from './limit-cont-alphanumeric/limit-cont-alphanumeric.directive';
import { LimitRepcontAlphanumericValidator } from './limit-repcont-alphanumeric/limit-repcont-alphanumeric.directive';
import { NotEqualToDirective } from './not-equal-to/not-equal-to.directive';
import { BothUppercaseLowercaseDirective } from './both-uppercase-lowercase/both-uppercase-lowercase.directive';

const CG_FORM_DIRECTIVES = [
  EqualDirective,
  EqualToDirective,
  NotEqualToDirective,
  AlphaNumericDirective,
  LimitSymbolDirective,
  LimitFullwidthDirective,
  LimitContAlphanumericValidator,
  LimitRepcontAlphanumericValidator,
  BothUppercaseLowercaseDirective
];

@NgModule({
  declarations: CG_FORM_DIRECTIVES,
  exports: CG_FORM_DIRECTIVES
})
export class NgValidatorModule { }
