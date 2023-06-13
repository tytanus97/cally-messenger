import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from '../../components/register-user/register-user.component';

@Component({
  selector: 'cally-messenger-register',
  standalone: true,
  imports: [CommonModule,RegisterUserComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {}
