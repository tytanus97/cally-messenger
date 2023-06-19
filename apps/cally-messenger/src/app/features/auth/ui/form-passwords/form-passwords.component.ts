import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { FormModelDirective, FormModelGroupDirective } from '@cally-messenger/shared';

@Component({
  selector: 'cally-messenger-form-passwords',
  standalone: true,
  imports: [CommonModule, FormsModule,FormModelDirective, FormModelGroupDirective],
  templateUrl: './form-passwords.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormPasswordsComponent {

  @Input() vm: any
}
