import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'cally-messenger-form-passwords',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-passwords.component.html',
  styleUrls: ['./form-passwords.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormPasswordsComponent {

  @Input() vm: any
}
