import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-js',
  templateUrl: './date-time-js.component.html',
  styleUrls: ['./date-time-js.component.scss']
})
export class DateTimeJsComponent implements OnInit {
  date: Date = new Date();
  subDate = new Date(2018, 11);

  constructor() { }

  ngOnInit(): void {
    console.log(Date.now());
  }

}
