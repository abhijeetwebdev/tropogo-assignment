import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { BatchBuilder } from './components/batch-builder/batch-builder';
import { BatchHeader } from './components/batch-builder/header/header';
import { BatchContent } from './components/batch-builder/content/content';
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
    BatchBuilder,
    BatchHeader,
    BatchContent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
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
    BatchBuilder,
    BatchHeader,
    BatchContent
  ]
})
export class SharedModule { }
