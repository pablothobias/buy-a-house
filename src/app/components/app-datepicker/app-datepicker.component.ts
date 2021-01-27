import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppDatepickerComponent implements OnInit {

  today: Date;
  selectedDate: Date;

  @Output() goalEmitter: EventEmitter<number | null> = new EventEmitter<number | null>();

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
    this.goalEmitter.emit(null);
  }

  openDatePicker(dp): void {
    dp.open();
  }

  closeDatePicker(eventData: any, dp?: any): void {
    const monthsResult: number = this.sanitizeMonthsDifferenceResult(eventData);
    this.goalEmitter.emit(monthsResult);
    dp.close();
  }

  sanitizeMonthsDifferenceResult(eventData: any): number{
    const eventDataAsDate: Date = new Date(eventData);
    const diffYears: number = eventDataAsDate.getFullYear() - this.today.getFullYear();
    const diffMonths: number =  eventDataAsDate.getMonth() - this.today.getMonth();
    const monthsResult: number = (diffYears * 12 + diffMonths);
    return monthsResult;
  }
}
