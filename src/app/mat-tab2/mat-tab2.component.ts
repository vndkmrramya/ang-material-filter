import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tab2',
  templateUrl: './mat-tab2.component.html',
  styleUrls: ['./mat-tab2.component.css']
})
export class MatTab2Component implements OnInit {
  currentMonth: string = '';
  currentMonth2: string = '';

  constructor() { }

  ngOnInit() {
    this.getCurrentMonth();
  }

  getCurrentMonth() {
    var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var twoDigitYear = dateObj.getUTCFullYear() % 100;
var m: number = +month;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
//console.log(dateObj + ' - ' + month + ' - ' + year + ' - ' + day);
console.log(monthNames);// + '\'' + twoDigitYear);
this.currentMonth = year + "/" + month + "/" + day;
console.log(this.currentMonth)
// alert(this.currentMonth)

  const date = new Date(2009, 10, 10);  // 2009-11-10
  const currentMonth2 = date.toLocaleString('default', { month: 'short' });
  console.log(currentMonth2);

  }
}
