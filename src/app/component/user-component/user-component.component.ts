import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  @Input() firstName = "Max";
  @Input() lastName = "Mustermann";

  onFirstNameInput(event: any) {
    this.firstName = event.target.value;
  }

  onLastNameInput(event: any) {
    this.lastName = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
