import { Injectable } from '@angular/core';

@Injectable()
export class PasswordStrengthService {

  calculatePasswordStrength(password: string): PasswordStrength {
      if(password.length > 9) return 'strong'
      if(password.length > 5) return 'medium'
      if(password.length > 0) return 'weak' 
      return 'none'
  }
}
export type PasswordStrength = 'none' | 'weak' | 'medium' | 'strong'
