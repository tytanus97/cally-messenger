import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'cally-messenger-form-username',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-username.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class FormUsernameComponent {
  @Input() vm: any
}
