import { Component, OnInit } from '@angular/core';
import { compareAsc, format } from 'date-fns'

@Component({
  selector: 'app-date-fns',
  templateUrl: './date-fns.component.html',
  styleUrls: ['./date-fns.component.scss']
})
export class DateFnsComponent implements OnInit {
  dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ]

  dateFormated = format(new Date(2014, 1, 11), 'yyyy-MM-dd');

  constructor() { }

  ngOnInit(): void {
    console.log(this.dates.sort(compareAsc));

  }

}
