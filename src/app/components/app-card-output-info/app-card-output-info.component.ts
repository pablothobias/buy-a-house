import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-output-info',
  templateUrl: './app-card-output-info.component.html',
  styleUrls: ['./app-card-output-info.component.scss']
})
export class AppCardOutputInfoComponent implements OnInit {

  constructor() { }

  @Input() amount: string;
  amountAsNumber: number | null;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.amount.previousValue !== changes?.amount.currentValue){
      this.sanitizeAmountValue(changes.amount.currentValue);
    }
  }

  sanitizeAmountValue(amount: string | null) {
    if (amount !== null) {
      this.amountAsNumber = parseFloat(amount);
    } else {
      this.amountAsNumber = null;
    }
  }
}
