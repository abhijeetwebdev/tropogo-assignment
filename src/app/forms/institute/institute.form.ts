import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-form',
  templateUrl: './institute.form.html',
  styleUrls: ['./institute.form.scss']
})
export class InstituteForm implements OnInit, OnDestroy {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  
  form: FormGroup;
  unsubcribe: any;
  fields: any[] = [
    {
      type: 'file',
      preview: true,
      name: 'logo',
      label: 'Institute Logo',
      required: true,
      files: [],
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'text',
      name: 'name',
      label: 'Name Of the Institute',
      value: '',
      required: true,
    },
    {
      type: 'file',
      preview: false,
      name: 'brochure',
      label: 'Institute Brochure',
      required: false,
      files: [],
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'file',
      preview: false,
      name: 'certifications',
      label: 'Certifications',
      required: false,
      files: [],
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'file',
      preview: false,
      name: 'gallery',
      label: 'Institute/Courses Gallery',
      required: true,
      files: [],
      onUpload: this.onUpload.bind(this)
    }
  ];

  constructor() { }

  ngOnInit() {
    let fieldsCtrls = {};

    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    
    this.form = new FormGroup(fieldsCtrls);

    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
    });
  }

  onUpload(field, files) {
    // console.log('field', field);
    // console.log('files', files);
  }

  ngOnDestroy() {
    this.unsubcribe();
  }

  validate() {
    // validation goes here
    // if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    // }
  }

}
