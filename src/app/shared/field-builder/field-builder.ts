import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.html'
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
