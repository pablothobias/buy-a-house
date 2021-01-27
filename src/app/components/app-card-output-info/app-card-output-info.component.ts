import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-output-info',
  templateUrl: './app-card-output-info.component.html',
  styleUrls: ['./app-card-output-info.component.scss']
})
export class AppCardOutputInfoComponent implements OnInit {

  constructor() { }

  @Input() amount: string | null;
  @Input() goal: number | null;
  amountAsNumber: number | null;
  total: number;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);

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

  sanitizeGoalValue(goal: number | null) {
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
      console.log('null');
    } else {
      this.total = this.amountAsNumber / this.goal;
      console.log(this.total, this.amountAsNumber, this.goal);
    }
  }
}
