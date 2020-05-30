import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'file',
  template: `
  <div [formGroup]="form">
    <div *ngIf="!field.value">
      <input type="file" multiple="" (change)="onFileChange($event)">
      <p *ngFor="let file of field.files; let i = index">
      ...{{ file.name | slice:-10 }} <a (click)="onFileRemove(index)" class="text-danger pointer">X</a>
      </p>
    </div>
  </div>`,
  styles: [`
  .pointer {
    cursor: pointer;
  }
  `]
})
export class FileComponent {

  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  onFileChange(event) {
    const files = event.target.files || null;
    if (files) {
      this.field.files = [];
      for (let i = 0; i < files.length; i++) {
        const elem = files[i];
        const file = { name: elem.name, type: elem.type, size: elem.size };
        this.field.files.push(file);
      }
      this.field.onUpload(this.field, files);
    }
  }

  onFileRemove(index: number) {
    this.field.files.splice(index, 1);
  }

  ngOnChange() {
  //  console.log(this.field.value);
  }
}
