import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
        <div class="form-check" *ngFor="let option of field.options">
          <input
            type="radio"
            [name]="field.name"
            [value]="option.key"
            class="form-check-input"
            [attr.id]="field.name + option.key"
            [checked]="option.key === field.value"
          >
          <label class="form-check-label" [attr.for]="field.name + option.key">
            {{option.label}}
          </label>
        </div>
      </div> 
    `
})
export class RadioComponent {
    @Input() showError: any;
    @Input() field: any = {};
    @Input() form: FormGroup;
}
