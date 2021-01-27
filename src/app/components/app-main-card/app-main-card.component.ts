import { Component } from '@angular/core';
import { selectedDate } from 'src/app/models/seleted-date.model';

@Component({
  selector: 'app-main-card',
  templateUrl: './app-main-card.component.html',
  styleUrls: ['./app-main-card.component.scss']
})
export class AppMainCardComponent {

  constructor() { }

  amount: string| null;
  goal: selectedDate| null;

  amountListener(incomingAmount: string | null) {
    this.amount = incomingAmount;
  }

  goalListener(incomingGoal: selectedDate | null) {
    this.goal = incomingGoal;
  }
}
