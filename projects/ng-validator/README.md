# NgValidator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation
```sh
$ npm install @cg/ng-validator
```

## How to use
Add following to `app.module.ts` or your module
```ts
import { NgValidatorModule } from '@cg/ng-validator';
@NgModule({
  // ...
  imports: [
    NgValidatorModule
  ]
  // ...
})
```
In your component ts
```ts
import { CgValidators } from '@cg/ng-validator';

constructor(
  private fb: FormBuilder
) {
  this.addUserForm = this.fb.group({
    'userPwd': userPwd,
    'certainPwd': [
      '',
      Validators.compose([
        Validators.required,
        CgValidators.equalTo(userPwd)
      ])],
  });
}
```

## Code scaffolding

Run `ng generate component component-name --project ng-validator` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-validator`.
> Note: Don't forget to add `--project ng-validator` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-validator` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

1.  修改 `ng-validator\projects\ng-validator\package.json` 中的版本號 `version`(下一個版本號，給使用lib的人看的) 
2.  執行指令，npm給project下版本號並壓上tag  
```sh
$ npm version [major|minor|patch]
```
3.  包版
```sh
$ npm run package
```
4.  發佈
```sh
$ npm publish dist/ng-validator
```

## Running unit tests

Run `ng test ng-validator` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
