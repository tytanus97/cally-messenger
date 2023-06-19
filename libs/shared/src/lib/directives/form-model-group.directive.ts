import { Directive, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngModelGroup]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: FormModelGroupDirective, multi: true },
  ],
})
export class FormModelGroupDirective implements OnInit, Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control.errors)
    return null
  }
  ngOnInit(): void {
    console.log('on init')
  }
  private readonly parentGroup?: FormModelGroupDirective | null = inject(
    FormModelGroupDirective,
    {
      skipSelf: true,
      optional: true,
    }
  );
  @Input() ngModelGroup = ''

  getPath(): string {
    return this.parentGroup
      ? this.parentGroup.getPath() + '.' + this.ngModelGroup
      : this.ngModelGroup;
  }
}
