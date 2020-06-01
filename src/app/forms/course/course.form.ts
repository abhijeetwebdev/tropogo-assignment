import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Batch, getEmptyBatch } from 'src/app/models/batch.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course.form.html',
  styleUrls: ['./course.form.scss']
})
export class CourseForm implements OnInit, OnDestroy {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  formSub: Subscription;
  requiredError = false;
  formSubmitted = false;
  batches: Batch[] = [];
  fields: any[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Course Name',
      value: '',
      required: true,
      placeholder: 'Add course name'
    },
    {
      type: 'radio',
      name: 'aircraftType',
      label: 'Aircraft Type',
      value: '',
      required: true,
      options: [
        { key: 'MR', label: 'Multi Rotar' },
        { key: 'FW', label: 'Fixed Wing' }
      ]
    },
    {
      type: 'text',
      name: 'name',
      label: 'Course Details',
      value: '',
      required: true,
      multiline: true,
      placeholder: 'Add course details'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.addEmptyBatch();
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

    this.formSub = this.form.valueChanges.subscribe((update) => {
      // console.log('form update', update);
    });
  }

  onUpload(field, files) {
    // console.log('field', field);
    // console.log('files', files);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

  validate() {
    // validation goes here
    this.formSubmitted = true;
    if (!this.fieldsValid()) {
      this.requiredError = true;
      return false;
    } else {
      this.requiredError = false;
    }
    this.onSubmit.emit(this.form.value);
  }

  fieldsValid() {
    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];
      if (field && field.required === true) {
        if (field && field.files) {
          if (field.files.length === 0) {
            return false;
          }
        } else {
          const text = this.form.controls[field.name].value;
          if (text === '') {
            return false;
          }
        }
      }
    }
    return true;
  }

  addEmptyBatch() {
    this.batches.push(getEmptyBatch());
  }

  onBatchesChange(batches: Batch[]) {
    this.batches = batches;
  }

}
