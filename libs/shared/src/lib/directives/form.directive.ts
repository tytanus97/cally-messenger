import { Directive, Input, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuiteResult } from 'vest';

@Directive({ 
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'form[model][suite]',
    standalone: true})
export class FormDirective<T> {
    @Input({required: true}) model!: T
    @Input() suite!: (model: T, field: string) => SuiteResult

    readonly ngForm = inject(NgForm,{self: true})
}