import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {

  constructor() { }

  @Output() amountEmitter: EventEmitter<string | null> = new EventEmitter<string | null>();

  ngOnInit(): void {
    this.amountEmitter.emit(null);
  }

  amountChangeObserver(value: string): void {
    if (value.length == 0) {
      this.amountEmitter.emit(null);
    } else {
      const rawAmountValue = this.sanitizeAmountValue(value);
      this.amountEmitter.emit(rawAmountValue);
    }
  }

  sanitizeAmountValue(value: string): string {
    return value.replace('$', '');
  }
}
