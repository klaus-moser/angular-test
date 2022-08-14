import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-test';
  rootFirstName = "Max";
  rootLastName = "Musermann";
  rootText = "...";

  onFirstNameChanged(newFirstName: any) {
    this.rootFirstName = newFirstName;
  }

  onLastNameChanged(newLastName: any) {
    this.rootLastName = newLastName;
  }

  onTextChanged(newText: any) {
    this.rootText = newText;
  }
}
