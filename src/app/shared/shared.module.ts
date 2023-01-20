import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    ProgressbarComponent
  ]
})
export class SharedModule { }
