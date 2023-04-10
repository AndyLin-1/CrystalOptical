import { Component, OnInit } from '@angular/core';
import {orderInterface} from "../../models/order";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {itemsInterface} from "../../models/items.interface";
import {itemsQuantityInterface} from "../../models/itemQuantity.interface";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  order : orderInterface;
  items : itemsQuantityInterface[];
  orderId : number;

  constructor(private apiService: ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.initializeOrder(+params["id"]);
      this.orderId = params["id"];
    });
  }

  private initializeOrder(id: number) {
    this.apiService.getOrder(id).subscribe({next : (data: orderInterface) => {
        this.order = data;
        this.items = data.order;
      },
      error: (error) => {
        this.orderId = -1;
      },});
  }

}
