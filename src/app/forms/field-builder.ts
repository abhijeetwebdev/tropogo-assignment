import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
        <div class="alert alert-danger my-1 p-2 fadeInDown animated"
          *ngIf="showError && (field.value === '' || field.files?.length === 0) && field.required"
        >{{field.label}} is required</div>
      </div>
    </div>`
})
export class FieldBuilder implements OnInit, OnDestroy {

  @Input() showError: any;
  @Input() field: any;
  @Input() form: any;
  fieldSub: Subscription;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
    this.fieldSub = this.form.controls[this.field.name].valueChanges.subscribe((value) => {
      this.field.value = value;
    });
  }

  ngOnDestroy() {
    this.fieldSub.unsubscribe();
  }
}
