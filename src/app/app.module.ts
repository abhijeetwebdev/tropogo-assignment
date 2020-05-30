import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

// modules
import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
