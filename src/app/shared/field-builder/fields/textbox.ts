import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.html'
})
export class TextBoxComponent {
  
  @Input() showError: any;
  @Input() field: any = {};
  @Input() form: FormGroup;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }
}
