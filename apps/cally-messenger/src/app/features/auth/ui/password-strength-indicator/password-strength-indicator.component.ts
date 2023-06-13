import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrength } from '../../services/password-strength.service';

@Component({
  selector: 'cally-messenger-password-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.scss'],
})
export class PasswordStrengthIndicatorComponent {
  passwordStrengthOptions = passwordStrengthOptions['weak']
  
  @Input() set passwordStrength(passwordStrength: PasswordStrength) {
    this.passwordStrengthOptions = passwordStrengthOptions[passwordStrength]
  }
}
type StrengthValues = {
  numOfBlocks: [],
  color: string,
  label: string
}
const passwordStrengthOptions: {[P in PasswordStrength]: StrengthValues} = {
  none: {
    numOfBlocks: [].constructor(0),
    color: 'transparent',
    label: 'none'
  },
  weak: {
    numOfBlocks: [].constructor(1),
    color: 'red',
    label: 'weak'
  },
  medium: {
    numOfBlocks: [].constructor(3),
    color: 'yellow',
    label: 'medium'
  },
  strong: {
    numOfBlocks: [].constructor(6),
    color: 'green',
    label: 'strong'
  }
}
