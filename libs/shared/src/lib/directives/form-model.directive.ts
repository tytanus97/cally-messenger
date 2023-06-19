import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { FormDirective } from './form.directive';
import { createValidatorFn } from '../utils/form-control.utils';
import { FormModelGroupDirective } from './form-model-group.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngModel]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: FormModelDirective, multi: true}]
})
export class FormModelDirective implements Validator {
  
  private readonly formDirective = inject(FormDirective)
  private readonly parentGroup?: FormModelGroupDirective | null = inject(
    FormModelGroupDirective,
    {
      skipSelf: true,
      optional: true,
    }
  );
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('name') controlName = ''
  
 
  validate(control: AbstractControl): ValidationErrors | null {
    const path = this.getPath()
    console.log(path)
    const {suite, model} = this.formDirective
    
    const validationFn = createValidatorFn(model,suite,path)
    const result = validationFn(control)
    console.log('validation esult', result)
    return result
  }
  private getPath(): string {
    return this.parentGroup ? `${this.parentGroup.getPath()}.${this.controlName}` : `${this.controlName}`
  }
}
