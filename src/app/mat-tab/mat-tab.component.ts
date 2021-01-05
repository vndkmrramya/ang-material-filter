import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.css']
})
export class MatTabComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Current', content: '<app-mat-table-text-button-filter></app-mat-table-text-button-filter>'},
          {label: 'History', content: 'Content 2'},
          {label: 'Details', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit() {
  }

}

export interface ExampleTab {
  label: string;
  content: string;
}
      