import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  rootFirstName = "Max";
  rootLastName = "Musermann";

  onFirstNameChanged(newFirstName: any) {
    this.rootFirstName = newFirstName;
  }

  onLastNameChanged(newLastName: any) {
    this.rootLastName = newLastName;
  }
}
