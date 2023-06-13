import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'cally-messenger-form-birth-date',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-birth-date.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]

})
export class FormBirthDateComponent {
  @Input() vm: any
}
