
import { Component } from '@angular/core';
import{MatFormField} from "@angular/material/form-field";
import{MatChipsModule} from "@angular/material/chips";

interface search {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'searchbar-component',
  templateUrl: 'searchbar.component.html',
  styleUrls: ['searchbar.component.css'],
})


export class SearchbarComponent {
  sizes: search[] = [
    { value: 'S', viewValue: 'S' },
    { value: 'M', viewValue: 'M' },
    { value: 'L', viewValue: 'L' },
  ];
  reviews: search[] = [
    { value: 'Most', viewValue: 'Most' },
    { value: 'Least', viewValue: 'Least' },
  ];
  colors: search[] = [
    { value: 'p', viewValue: 'p' },
    { value: 'M', viewValue: 'M' },
    { value: 'L', viewValue: 'L' },
  ];
  prices: search[] = [
    { value: 'Highest', viewValue: 'Lowest' },
    {
      value: 'Highest',
      viewValue: 'Highest',
    },
  ];
}

