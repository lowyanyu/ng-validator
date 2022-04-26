import { equal } from './lib/equal/validator';
import { equalTo } from './lib/equal-to/validator';
import { notEqualTo } from './lib/not-equal-to/validator';
import { alphaNumeric } from './lib/alphanumeric/validator';
import { limitContAlphaNumeric } from './lib/limit-cont-alphanumeric/validator';
import { limitFullwidth } from './lib/limit-fullwidth/validator';
import { limitRepcontAlphaNumeric } from './lib/limit-repcont-alphanumeric/validator';
import { limitSymbol } from './lib/limit-symbol/limit-symbol/validator';
import { upperAndLowercase } from './lib/both-uppercase-lowercase/validator';

/*
 * Public API Surface of ng-validator
 */

// export * from './lib/ng-validator.service';
export * from './lib/ng-validator.module';

export * from './lib/equal/equal.directive';
export * from './lib/equal-to/equal-to.directive';
export * from './lib/alphanumeric/alphanumeric.directive';
export * from './lib/limit-symbol/limit-symbol/limit-symbol.directive';
export * from './lib/limit-fullwidth/limit-fullwidth.directive';
export * from './lib/limit-cont-alphanumeric/limit-cont-alphanumeric.directive';
export * from './lib/limit-repcont-alphanumeric/limit-repcont-alphanumeric.directive';
export * from './lib/not-equal-to/not-equal-to.directive';
export * from './lib/both-uppercase-lowercase/both-uppercase-lowercase.directive';

export const CgValidators: any = {
  equal,
  equalTo,
  notEqualTo,
  alphaNumeric,
  limitContAlphaNumeric,
  limitFullwidth,
  limitRepcontAlphaNumeric,
  limitSymbol,
  upperAndLowercase
};
