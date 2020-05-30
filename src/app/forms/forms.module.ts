import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// forms
import { InstituteForm } from './institute/institute.form';

// components
import { FieldBuilder } from './field-builder';

// input fields
import { TextBoxComponent } from './fields/textbox';
import { FileComponent } from './fields/file';

@NgModule({
  declarations: [
    InstituteForm,
    FieldBuilder,
    TextBoxComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InstituteForm,
    FieldBuilder
  ]
})
export class FormsModule { }
