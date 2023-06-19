import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SuiteResult } from 'vest';
import { setPropertyPathValue } from './object-utils';

export function createValidatorFn<T>(model:T, suite: (model:T, field: string) => SuiteResult, field: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const modelToValidate = setPropertyPathValue({...model} as T,field,control.value)
        console.log('modeltoValidate',modelToValidate)
        const result = suite(modelToValidate,field)
        const errors = result.getErrors()[field]
        return errors ? {error: errors[0], errors} : null
    }
}