import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

interface Month {
  value: number;
  name: string;
}

@Component({
  selector: 'app-mat-table-text-button-filter',
  templateUrl: './mat-table-text-button-filter.component.html',
  styleUrls: ['./mat-table-text-button-filter.component.css']
})
export class MatTableTextButtonFilterComponent implements OnInit {

  constructor() {
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.createFilter();
  }
  toggle:boolean = true;
  show:any;
tab1(){
    alert('tab1');
    this.show = true;
}
tab2(){
    alert('tab2');
    this.show = true;
}
  change(){
    this.toggle = !this.toggle;
  }


  matButtonToggleGroupSelectedValue: string[] = ["First"];
  matButtonToggleGroupToggleOptions: Array<String> = ["First", "Second"];


  matButtonToggleGroupSelectionChanged(item) {
    console.log('selected value = ' + item.value);
    this.matButtonToggleGroupSelectedValue.forEach(i => console.log(`Included item: ${i}`));
  }

  selected: string;
  monthNames: string[];

  matButtonFilter = {
    reportedMonth: '',
    //reportDate: '',
    name: '',
    id: '',
    colour: '',
    pet: ''
  };

  dropdownDateFilter = {
    reportedMonth: '',
    //reportDate: '',
    name: '',
    id: '',
    colour: '',
    pet: ''
  };


  months: Month[] = [
    {value: 0, name: 'January'},
    {value: 1, name: 'February'},
    {value: 2, name: 'March'},
    {value: 3, name: 'April'},
    {value: 4, name: 'May'},
    {value: 5, name: 'June'},
    {value: 6, name: 'July'},
    {value: 7, name: 'August'},
    {value: 8, name: 'September'},
    {value: 9, name: 'October'},
    {value: 10, name: 'November'},
    {value: 11, name: 'December'}
  ];

  intialFilter = {
    name: '',
    id: '',
    colour: [],
    pet: ''
  };

  people = [
    { 
      reportDate: '2020-11-20',
      name: 'John',
      id: 1,
      colour: 'Green',
      pet: 'Dog'
    },
    {
      reportDate: '2020-10-20',
      name: 'Sarah',
      id: 2,
      colour: 'Purple',
      pet: 'Cat'
    },
    {
      reportDate: '2020-09-20',
      name: 'Lindsay',
      id: 3,
      colour: 'Blue',
      pet: 'Lizard'
    },
    {
      reportDate: '2020-08-20',
      name: 'Megan',
      id: 4,
      colour: 'Orange',
      pet: 'Dog'
    },
    {
      reportDate: '2020-07-20',
      name: 'Sam',
      id: 5,
      colour: 'Purple',
      pet: 'Ant'
    },
    {
      reportDate: '2020-06-20',
      name: 'Murali',
      id: 6,
      colour: 'White',
      pet: 'Rabit'
    }
  ];

  reportedMonthFilter = new FormControl('');
  //reportDateFilter = new FormControl('');
  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');

  dataSource = new MatTableDataSource();
  columnsToDisplay = ['reportedMonth', 
  //'reportDate', 
  'name', 'id', 'favouriteColour', 'pet'];

  filterValues = {
    reportedMonth: '',
    //reportDate: '',
    name: '',
    id: '',
    colour: '',
    pet: ''
  };
  
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: string = 'boldClass';

  isApplyBoldClass: boolean = true;
  isRemoveBoldClass: boolean = false;
  
  isApplyItalicsClass: boolean = true;

  isOpenOrClosedButton: string = '';
  isMyIntakesOrAllIntakes: string = '';

  addClasses() {
    let classes = {
      boldClass: this.isApplyBoldClass,
      italicsClass: this.isApplyItalicsClass
    }
    return classes;
  }
  
  openFilter() {
    this.isOpenOrClosedButton = 'Open';
    this.matButtonFilter.colour = 'orange';
    this.dataSource.filter =  JSON.stringify(this.matButtonFilter);
  }

  closedFilter() {
    this.isOpenOrClosedButton = 'Closed';
    this.matButtonFilter.colour = 'purple';
    this.dataSource.filter =  JSON.stringify(this.matButtonFilter);
  }

  dogFilter(){
    this.isMyIntakesOrAllIntakes = 'My Intakes';
    this.matButtonFilter.pet = 'dog';
    this.dataSource.filter =  JSON.stringify(this.matButtonFilter);
  }

  catFilter(){
    this.isMyIntakesOrAllIntakes = 'All Intakes';
    this.matButtonFilter.pet = 'cat';
    this.dataSource.filter =  JSON.stringify(this.matButtonFilter);
  }

  resetMatButtonFilter() {
    this.isOpenOrClosedButton = '';
    this.isMyIntakesOrAllIntakes = '';
    this.matButtonFilter.colour = '';
    this.matButtonFilter.pet = '';
  }

  ngOnInit() {
    this.show = false;
    this.monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    this.selected = this.monthNames[new Date(this.people[0].reportDate).getUTCMonth()].toString();
    
    this.reportedMonthFilter.valueChanges
      .subscribe(
        reportedMonth => {
          this.resetMatButtonFilter();
          this.filterValues.reportedMonth = reportedMonth;
          console.log(JSON.stringify(this.filterValues));
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    // this.reportDateFilter.valueChanges
    //   .subscribe(
    //     reportDate => {
    //       this.filterValues.reportDate = reportDate;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )

    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.resetMatButtonFilter();
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
          //this.applyBoldClass = true;
        }
      )
    this.idFilter.valueChanges
      .subscribe(
        id => {
          this.resetMatButtonFilter();
          this.filterValues.id = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.colourFilter.valueChanges
      .subscribe(
        colour => {
          this.resetMatButtonFilter();
          this.filterValues.colour = colour;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.petFilter.valueChanges
      .subscribe(
        pet => {
          this.resetMatButtonFilter();
          this.filterValues.pet = pet;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    }
  
  
  someMethod(value) {
    this.resetMatButtonFilter();
    const m = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];

    var d = new Date(2016, value, 17);
    console.log(value);
    console.log(d);
    this.dropdownDateFilter.reportedMonth = m[d.getUTCMonth()].toString();
    this.dataSource.filter = JSON.stringify(this.dropdownDateFilter); 
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      // //console.log(JSON.stringify(JSON.parse(filter)));
      // // you can make the conditions here also
      
      // console.log((this.monthNames[new Date(data.reportDate).getUTCMonth()].toString()) + '\'' + (new Date(data.reportDate).getUTCFullYear().toString()));
      // console.log(filter)
      let searchTerms = JSON.parse(filter);
      console.log(searchTerms);
      // //data.reportDate.toLowerCase().indexOf(searchTerms.reportedMonth) !== -1 &&
      // //return data.reportDate.toLowerCase().indexOf(searchTerms.reportedMonth) !== -1 &&
      
      // console.log(data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1);
      // console.log(((this.monthNames[new Date(data.reportDate).getUTCMonth()].toString()) + '\'' + (new Date(data.reportDate).getUTCFullYear().toString())).toLocaleLowerCase().indexOf(searchTerms.reportedMonth) !== -1)
      //   //&& 

      //   // ((monthNames[new Date(data.reportDate).getUTCMonth()].toString()) + '\'' + (new Date(data.reportDate).getUTCFullYear().toString())).toLocaleLowerCase().indexOf(searchTerms.reportedMonth) !== -1
      //   // && 

      //   console.log('---------------')
      //   console.log(data.name.toLowerCase().indexOf(searchTerms.name) !== -1)
      //   console.log(data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1);
      //   console.log(data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1)
      //   console.log(data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1)
      //   console.log(searchTerms);
      // // return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
      // //   && data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
      // //   && data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
      // //   && data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;

      const m1 = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];

      // console.log(new Date(data.reportDate).getUTCMonth());
      // console.log(this.monthNames);
      // console.log(this.months[0].name);
      // console.log(this.monthNames[new Date(data.reportDate).getUTCMonth()].toString());
      return m1[new Date(data.reportDate).getUTCMonth()].toString().indexOf(searchTerms.reportedMonth) != -1;

    }
    return filterFunction;
  }

  monthFilter() {

  }

  greenFilterMethod() {
    this.applyGreenFilter();
  }

  // not preffered
  applyGreenFilter() {
    let greenFilter = {
      reportedMonth: '',
      //reportDate: '',
      name: '',
      id: '',
      colour: 'green',
      pet: ''
    };
    let gFilter = JSON.stringify(greenFilter).toLowerCase();
    this.dataSource.filter = gFilter;
  }

  // preffered
  applyOrangeFilter() {
    this.intialFilter.colour = [];
    this.intialFilter.colour.push('Orange');
    let oFilter = JSON.stringify(this.intialFilter).toLocaleLowerCase();
    this.dataSource.filter = oFilter;
  }

  // sampleGreen() {
  //   this.greenButtonFilter = true;
  //   this.colourFilter.setValue(' ');

  //   //this.colourFilter.markAsPristine();
  //   //this.createFilter();
  //   //this.dataSource.data.filter(df => df.colour === 'Green'); 
  //   //this.people.filter(df => df.colour === 'Green');
  // }

  // applyFilter(value: string){
  //   console.log('11111 -- '  + value);
  //     if (!this.dataSource) { return; }
  //     console.log(this.dataSource.data);
  //     console.log(this.dataSource.filter);
  //     this.dataSource.filter = "{ 'colour' : 'Green'}";
  // }

  clone1() {
    var customer = new Customer('David', new Example('DavidType'));
    var clone = { ...customer };

    alert('Before change clone ' + customer.name + ' ' + customer.example.type);
    alert('Before change clone ' + clone.name + ' ' + clone.example.type); // David DavidType

    //alert(clone.greet()); // Not OK

    clone.name = 'Steve';
    clone.example.type = 'SteveType';

    alert('after change clone ' + customer.name + ' ' + customer.example.type); // David SteveType
    alert('after change clone ' + clone.name + ' ' + clone.example.type); 
  }

}



class Example {
  constructor(public type: string) {

  }
}

class Customer {
  constructor(public name: string, public example: Example) {
  }

  greet() {
    return 'Hello ' + this.name;
  }
}
