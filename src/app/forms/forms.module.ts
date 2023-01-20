import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// forms
import { InstituteForm } from './institute/institute.form';
import { CourseForm } from './course/course.form';

// modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstituteForm,
    CourseForm
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgFormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    InstituteForm,
    CourseForm
  ]
})
export class FormsModule { }
