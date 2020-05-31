import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// forms
import { InstituteForm } from './institute/institute.form';
import { CourseForm } from './course/course.form';

// components
import { FieldBuilder } from './field-builder';
import { BatchBuilder } from './batches/batch-builder';

// input fields
import { TextBoxComponent } from './fields/textbox';
import { FileComponent } from './fields/file';
import { RadioComponent } from './fields/radio';

@NgModule({
  declarations: [
    InstituteForm,
    CourseForm,
    FieldBuilder,
    BatchBuilder,
    TextBoxComponent,
    FileComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InstituteForm,
    CourseForm,
    FieldBuilder,
    BatchBuilder
  ]
})
export class FormsModule { }
