import { selectedDate } from './../../models/seleted-date.model';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppDatepickerComponent implements OnInit {

  today: Date;
  selectedDate: Date | null = null;

  @Output() goalEmitter: EventEmitter<selectedDate | null> = new EventEmitter<selectedDate | null>();

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
    this.selectedDate = eventData;
    const sanitizedDate: selectedDate = this.sanitizeMonthsDifferenceResult(eventData);
    this.goalEmitter.emit(sanitizedDate);
    dp.close();
  }

  sanitizeMonthsDifferenceResult(eventData: any): selectedDate {
    const eventDataAsDate: Date = new Date(eventData);
    const diffYears: number = eventDataAsDate.getFullYear() - this.today.getFullYear();
    const diffMonths: number = eventDataAsDate.getMonth() - this.today.getMonth();
    const monthsResult: number = (diffYears * 12 + diffMonths);
    const month: string = eventDataAsDate.toLocaleString('default', { month: 'long' });
    const year: string = eventDataAsDate.getFullYear().toString();
    return {
      year,
      month,
      value: monthsResult
    };
  }
}
