import {AfterViewInit, Component, OnInit} from '@angular/core';
import {itemsInterface} from "../../models/items.interface";
import {StorageService} from "../../services/storage.service";
import {itemsQuantityInterface} from "../../models/itemQuantity.interface";

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
  items: itemsQuantityInterface[] = [];
  subtotal: number = 0;


  constructor(private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.items = this.storageService.getCart();
  }

  valueChanged() {
    for (let i = 0; i < this.items.length; i++) {
      (this.items)[i].quantity = parseFloat((<HTMLInputElement>document.getElementById(i.toString())).value);
      this.subtotal += ((this.items)[i].item.price * (this.items)[i].quantity);
    }
    this.updateCart();
  }

  updateCart(){
    this.storageService.updateCart(this.items);
  }

  calculateTotal(): number{
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += ((this.items)[i].item.price * (this.items)[i].quantity);
    }
    return total;
  }

}
