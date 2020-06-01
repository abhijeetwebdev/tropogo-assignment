import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox',
  template: `
  <div [formGroup]="form">
    <input class="form-control"
      *ngIf="!field.multiline"
      [attr.type]="field.type"
      [id]="field.name"
      [name]="field.name"
      [formControlName]="field.name"
    >
    <textarea class="form-control"
      *ngIf="field.multiline"
      [class.is-invalid]="isDirty && !isValid"
      [formControlName]="field.name"
      [id]="field.name"
      rows="9"
      [placeholder]="field.placeholder"
    ></textarea>
  </div>`
})
export class TextBoxComponent {
  
  @Input() field: any = {};
  @Input() form: FormGroup;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }
}