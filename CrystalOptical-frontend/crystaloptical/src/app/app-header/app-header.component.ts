import { Component, OnInit } from '@angular/core';
import { itemsInterface } from "../modules/simple-item/simple-item.component";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  imageList: itemsInterface[] = [
    {
      id: 1,
      name: 'Logo PNG',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/logo.png'
    },
    {
      id: 2,
      name: 'Profile Icon',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/profile.png'
    },
    {
      id: 3,
      name: 'Cart Icon',
      price: 450.99,
      brand: 'Ray Ban',
      frameSize: 'M',
      colour: 'black',
      rating: 4.2,
      ratingScore: 5,
      ratingNumber: 4,
      itemStock: 12,
      imagePath: './../assets/cart.png'
    }
  ];




  /*

    item: itemsInterface = {
    id: 1,
    name: 'Ray Ban BigGoggles420',
    price: 450.99,
    brand: 'Ray Ban',
    frameSize: 'M',
    colour: 'black',
    rating: 4.2,
    ratingScore: 5,
    ratingNumber: 4,
    itemStock: 12,
    imagePath: './../../Logo.png'
  }

  export interface itemsInterface {
  id: number;
  name: string;
  price: number;
  brand: string;
  frameSize: string;
  colour: string;
  rating: number;
  ratingScore: number;
  ratingNumber: number;
  itemStock: number;
  imagePath: string;
}
*/

  constructor() { }

  ngOnInit(): void {
  }

}
