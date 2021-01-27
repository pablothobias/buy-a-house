import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { selectedDate } from 'src/app/models/seleted-date.model';

@Component({
  selector: 'app-card-output-info',
  templateUrl: './app-card-output-info.component.html',
  styleUrls: ['./app-card-output-info.component.scss']
})
export class AppCardOutputInfoComponent implements OnInit {

  constructor() { }

  @Input() amount: string | null;
  @Input() goal: selectedDate | null;
  amountAsNumber: number | null;
  total: number;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes?.amount) {
      this.sanitizeAmountValue(changes.amount.currentValue);
    }
    if (changes?.goal) {
      this.sanitizeGoalValue(changes.goal.currentValue);
    }
  }

  sanitizeAmountValue(amount: string | null) {
    if (amount !== null) {
      this.amountAsNumber = parseFloat(amount);
    } else {
      this.amountAsNumber = null;
    }

    this.handleTotalOutputInfo();
  }

  sanitizeGoalValue(goal: selectedDate | null) {
    if (goal !== null) {
      this.goal = goal;
    } else {
      this.goal = null;
    }

    this.handleTotalOutputInfo();
  }

  handleTotalOutputInfo() {
    if (this.goal == null || this.amountAsNumber == null) {
      this.total = null;
    } else {
      this.total = this.amountAsNumber / this.goal.value;
    }
  }
}
