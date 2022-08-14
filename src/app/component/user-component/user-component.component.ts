import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  @Input() firstName: string = "Max";
  @Input() lastName: string = "Mustermann";
  @Output() firstNameChanged = new EventEmitter<string>();
  @Output() lastNameChanged = new EventEmitter<string>();

  onFirstNameInput(event: any) {
    // this.firstName = event.target.value;
    this.firstNameChanged.emit(event.target.value);
  }

  onLastNameInput(event: any) {
    // this.lastName = event.target.value;
    this.lastNameChanged.emit(event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
