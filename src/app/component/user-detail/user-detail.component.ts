import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

export interface DefaultText {
  id: number;
  text: string
}


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Output() buttonTextChanged = new EventEmitter<string>();

  defaultTexts : DefaultText[] = [
    {
      id: 0,
      text: "Wie heißen Sie?"
    },
    {
      id: 1,
      text: "Woher kommen Sie?"
    },
    {
      id: 2,
      text: "Bitte weisen Sie sich aus!"
    },
  ]

  onBadgeClick(event: any) {
    console.log("filter buttons")
    this.defaultTexts = this.defaultTexts.filter(a => a != event);
    this.textChanged.emit(this.rootText) // Reset input to "..."
  }

  rootText: string = "...";
  @Output() textChanged = new EventEmitter<string>();

  onButtonClick(buttonText: any) {
    console.log("button click")
    this.textChanged.emit(buttonText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
