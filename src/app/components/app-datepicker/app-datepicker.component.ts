import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppDatepickerComponent implements OnInit {

  today: Date;
  sixMonthsAgo: Date;

  constructor() {
    this.today = new Date();
    this.sixMonthsAgo = new Date();
    this.sixMonthsAgo.setMonth(this.today.getMonth() - 6);
  }

  ngOnInit(): void {
  }

  openDatePicker(dp) {
    dp.open();
  }

  closeDatePicker(eventData: any, dp?: any) {
    dp.close();
  }
}
