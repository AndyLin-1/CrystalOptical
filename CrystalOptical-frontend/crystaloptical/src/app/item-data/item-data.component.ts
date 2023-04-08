import { Component, OnInit } from '@angular/core';
import { itemsInterface } from "../modules/simple-item/simple-item.component";

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

  imageList: itemsInterface[] = [
    {
      id: 1,
      name: 'PotatoBoi',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/placeholder-200x200.png'
    },
    {
      id: 1,
      name: 'cart png',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/cart.png'
    },
    {
      id: 2,
      name: 'Fast Truck',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/fast-truck.png'
    },
    {
      id: 3,
      name: 'Calender',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/calendar.png'
    },
    {
      id: 4,
      name: 'Person',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/person.png'
    },
    {
      id: 5,
      name: 'Camera',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/camera.png'
    }
  ]

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
