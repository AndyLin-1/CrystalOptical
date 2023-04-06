import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  quantity: any;
  items: any[] =[
    { name: "Glasses 1", price: 1.2, quantity: 3 },
    { name: "Glasses 2", price: 2.3, quantity: 2 },
    { name: "Glasses 3", price: 3.4, quantity: 1 },
    { name: "Glasses 4", price: 4.5, quantity: 5 },
    { name: "Glasses 5", price: 5.6, quantity: 1 },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
