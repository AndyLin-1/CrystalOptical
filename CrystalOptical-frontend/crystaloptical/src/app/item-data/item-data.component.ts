import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']


})

export class ItemDataComponent implements OnInit {
  glassesTitle:string = 'Glasses Test Title';
  numStars:number = 4.2;
  numReviews:number = 4200;
  inStock:boolean = true;
  price:number = 420.60;
  description:string =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, ' +
    'varius quis tortor sed, cursus congue nulla. Maecenas a diam posuere, fringilla erat at, iaculis ' +
    'turpis. Fusce aliquam turpis vel augue hendrerit consectetur. Nulla a ligula malesuada, hendrerit ';

  quantity_value: number = 1;

  decrementQuantity() {
    if (this.quantity_value >= 2) {
      this.quantity_value -= 1
    }
  }
  incrementQuantity() {
    if (this.quantity_value <= 4) {
      this.quantity_value += 1
    }
  }




  constructor() { }




  ngOnInit(): void {
  }

}
