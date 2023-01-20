import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'file',
  template: `
  <div [formGroup]="form">
    <div *ngIf="field.preview && base64">
      <img [src]="base64"/>
    </div>
    <input type="file" multiple="" (change)="onFileChange($event)">
    <div *ngIf="!field.preview">
      <p *ngFor="let file of field.files; let i = index">
      ...{{ file.name | slice:-10 }} <a (click)="onFileRemove(index)" class="text-danger pointer">X</a>
      </p>
    </div>
  </div>`,
  styles: [`
  .pointer {
    cursor: pointer;
  }
  img {
    widht: 100%;
  }
  `]
})
export class FileComponent {

  @Input() field: any = {};
  @Input() form: FormGroup;
  base64: any;

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
      if (this.field.preview) {
        this.readURL(files);
      }
    }
  }

  onFileRemove(index: number) {
    this.field.files.splice(index, 1);
  }

  readURL(files) {
    if (files && files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.base64 = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(files[0]);
    }
  }

  ngOnChange() {
    //  console.log(this.field.value);
  }
}
