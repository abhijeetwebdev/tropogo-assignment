import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-builder',
  template: `
    <div class="form-group row" [formGroup]="form">
      <label class="col-md-3 form-control-label" [attr.for]="field.label">
        {{field.label}}
        <strong *ngIf="!field.required">(optional)</strong>
      </label>
      <div class="col-md-9" [ngSwitch]="field.type">
        <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
        <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
        <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
      </div>
    </div>`
})
export class FieldBuilder implements OnInit {

  @Input() field: any;
  @Input() form: any;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() { }
}
