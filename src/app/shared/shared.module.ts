import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { BatchBuilder } from './components/batch-builder/batch-builder';
import { FieldBuilder } from './components/field-builder/field-builder';

// fields
import { TextBoxComponent } from './components/field-builder/fields/textbox';
import { FileComponent } from './components/field-builder/fields/file';
import { RadioComponent } from './components/field-builder/fields/radio';

@NgModule({
  declarations: [
    NavbarComponent,
    ProgressbarComponent,
    FieldBuilder,
    TextBoxComponent,
    FileComponent,
    RadioComponent,
    BatchBuilder
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    ProgressbarComponent,
    FieldBuilder,
    TextBoxComponent,
    FileComponent,
    RadioComponent,
    BatchBuilder
  ]
})
export class SharedModule { }
