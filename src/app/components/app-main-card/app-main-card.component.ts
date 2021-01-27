import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './app-main-card.component.html',
  styleUrls: ['./app-main-card.component.scss']
})
export class AppMainCardComponent {

  constructor() { }

  amount: string| null;
  goal: number| null;

  amountListener(incomingAmount: string | null) {
    this.amount = incomingAmount;
  }

  goalListener(incomingGoal: number | null) {
    this.goal = incomingGoal;
  }
}
