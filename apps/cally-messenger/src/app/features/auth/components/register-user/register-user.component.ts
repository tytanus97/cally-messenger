import { AfterViewInit, Component, Injector, OnInit, ViewChild, computed, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective, FormModelDirective, SignalState } from '@cally-messenger/shared';
import { RegisterUser } from '../../models/register-user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs';
import { FormUsernameComponent } from '../../ui/form-username/form-username.component';
import { FormEmailComponent } from '../../ui/form-email/form-email.component';
import { FormBirthDateComponent } from '../../ui/form-birth-date/form-birth-date.component';
import { FormPasswordsComponent } from '../../ui/form-passwords/form-passwords.component';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import { userValidation } from '../../services/model-validation.service';

@Component({
  selector: 'cally-messenger-register-user',
  standalone: true,
  imports: [CommonModule, FormsModule,FormUsernameComponent,FormEmailComponent,FormBirthDateComponent,FormPasswordsComponent,
    PasswordStrengthComponent,FormModelDirective,FormDirective],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent extends SignalState<FormState> implements OnInit, AfterViewInit{
  private _injector: Injector = inject(Injector)
  validationSuite = userValidation

  @ViewChild('form') form!: NgForm
  vm = computed(() => {
    const {user} = this.state()
    return {
      user
    }
  })

  formState = computed(() => {
    return this.state().formState
  })
  

  ngOnInit(): void {
    this.initialize({user: INITIAL_USER,formState: {
       dirty: false,
       invalid: false,
       pristine: false,
       touched: false
    }})
  }

  ngAfterViewInit(): void {
    runInInjectionContext(this._injector,() => {
      this.connectObservables({
        user: this.form.valueChanges?.pipe(map((u) => ({...u} as RegisterUser ))),
        formState: this.form.statusChanges?.pipe(map(() => {
          return {
            invalid: this.form.invalid,
            touched: this.form.touched,
            dirty: this.form.dirty,
            pristine: this.form.pristine
          }
        }))
      })
    })
  }


  submit() {
    console.log(this.form) 
    console.log(this.state())
  }
}

const INITIAL_USER: RegisterUser = {
  email: '',
  username: '',
  passwords: {
    password: 'a',
    confirmPassword: 'a'
  },
  dateOfBirth: new Date()
} 

type FormState = {
  user: RegisterUser,
  formState: {
    invalid: boolean | null,
    touched: boolean | null,
    dirty: boolean | null,
    pristine: boolean | null
  }
}
