import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'file',
  template: `
  <div [formGroup]="form">
    <div *ngIf="!field.value" class="drop-container dropzone" dropZone (hovered)="toggleHover($event)"
      (dropped)="field.onUpload($event)" [class.hovering]="isHovering">
      <input type="file" multiple="" (change)="field.onUpload($event.target.files)">
    </div>
    <div *ngIf="field.value">
      <!-- <button type="button" class="btn btn-primary">Change</button> -->
      <div class="card">
        <img class="card-img-top" [src]="field.value">
      </div>
    </div>
  </div>`
})
export class FileComponent {

  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnChange() {
   console.log(this.field.value);
  }
}
