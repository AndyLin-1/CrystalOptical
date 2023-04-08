import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CheckoutItemComponent} from "../checkout-item/checkout-item.component";

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {


  /**
   * Should be replaced with list of items in cart
   * to perform price calculations
   */
  items: any[] =[
    { name: "Glasses 1", price: 1.2, quantity: 3 },
    { name: "Glasses 2", price: 2.3, quantity: 2 },
    { name: "Glasses 3", price: 3.4, quantity: 1 },
    { name: "Glasses 4", price: 4.5, quantity: 5 },
    { name: "Glasses 5", price: 5.6, quantity: 1 },

  ]


  constructor() {

  }

  ngOnInit(): void {

  }
}
