import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// forms
import { InstituteForm } from './institute/institute.form';
import { CourseForm } from './course/course.form';

// components
import { FieldBuilder } from './field-builder';

// input fields
import { TextBoxComponent } from './fields/textbox';
import { FileComponent } from './fields/file';
import { RadioComponent } from './fields/radio';

@NgModule({
  declarations: [
    InstituteForm,
    CourseForm,
    FieldBuilder,
    TextBoxComponent,
    FileComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InstituteForm,
    CourseForm,
    FieldBuilder
  ]
})
export class FormsModule { }
