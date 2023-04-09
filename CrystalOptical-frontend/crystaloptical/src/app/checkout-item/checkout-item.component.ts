import {Component, OnInit} from '@angular/core';
import {itemsInterface} from "../modules/simple-item/simple-item.component";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  quantity: any;
  subtotal : number = 0.0
  shipping : number = 0.0
  total : number = 0.0
  items: any[] =[
    { name: "Glasses 1", price: 1.2, quantity: 3, imagePath: "./../assets/glasses1.png" },
    { name: "Glasses 2", price: 2.3, quantity: 2, imagePath: "./../assets/glasses1.png" },
    { name: "Glasses 3", price: 3.4, quantity: 1, imagePath: "./../assets/glasses1.png" },
    { name: "Glasses 4", price: 4.5, quantity: 5, imagePath: "./../assets/glasses1.png" },
    { name: "Glasses 5", price: 5.6, quantity: 1, imagePath: "./../assets/glasses1.png" },
  ]

  valueChanged() {
    for (let i = 0; i < this.items.length; i++) {
      (this.items)[i].quantity = parseFloat((<HTMLInputElement>document.getElementById(i.toString())).value);
      this.subtotal += ((this.items)[i].price * (this.items)[i].quantity);
    }
  }

  getTotal() {
    return this.total;
  }

  noItems: any;

  constructor() { }

  ngOnInit(): void {
  }

  /***
   * When a change is detected in the quantity, it reads ALL quanitities
   * and saves new quantity values back to the array OR cookies
   *
   * When Update Cart is pressed, page grabs list from cookie with new quantity values
   */

}
