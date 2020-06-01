import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  step = 1;
  progress = {
    percentage: 0,
    institute: null,
    course: null,
  };

  formSubmit(data) {
    if (this.step === 1) {
      this.progress.institute = data;
    } else if (this.step === 2) {
      this.progress.course = data;
    }
    // console.log(this.progress);
    this.progress.percentage += 25;
    this.step++;
  }
  
}
