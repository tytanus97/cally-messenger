import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'cally-messenger-form-email',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormEmailComponent {
  @Input() vm: any
}
