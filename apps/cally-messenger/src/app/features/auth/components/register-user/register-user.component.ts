import { Component, OnInit, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignalState } from '@cally-messenger/shared';
import { RegisterUser } from '../../models/register-user.model';

@Component({
  selector: 'cally-messenger-register-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent extends SignalState<RegisterUser> implements OnInit{
  
  vm: Signal<RegisterUser> = computed(() => structuredClone(this.state()))
  
  ngOnInit(): void {
    this.initialize(INITIAL_STATE)
  }

}

const INITIAL_STATE: RegisterUser = {
  firstName: '',
  email: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: new Date()
} 
