import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// forms
import { InstituteForm } from './institute/institute.form';

@NgModule({
  declarations: [
    InstituteForm
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InstituteForm
  ]
})
export class FormsModule { }
