import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthIndicatorComponent } from '../../ui/password-strength-indicator/password-strength-indicator.component';
import { PasswordStrength, PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'cally-messenger-password-strength',
  standalone: true,
  imports: [CommonModule,PasswordStrengthIndicatorComponent],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  providers: [PasswordStrengthService]
})
export class PasswordStrengthComponent {
  private passwordStrengthService: PasswordStrengthService = inject(PasswordStrengthService)

  passwordStrength = signal<PasswordStrength>('weak')

  @Input() set password(password: string) {
    const passwordStrength = this.passwordStrengthService.calculatePasswordStrength(password)
    this.passwordStrength.set(passwordStrength)
  }
}
