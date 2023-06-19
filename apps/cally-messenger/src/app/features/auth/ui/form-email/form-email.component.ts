import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { FormModelDirective } from '@cally-messenger/shared';

@Component({
  selector: 'cally-messenger-form-email',
  standalone: true,
  imports: [CommonModule, FormsModule,FormModelDirective],
  templateUrl: './form-email.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormEmailComponent {
  @Input() vm: any
}
