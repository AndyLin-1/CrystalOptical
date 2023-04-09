import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {itemsInterface} from "../../models/items.interface";
import {StorageService} from "../../services/storage.service";
import {itemsQuantityInterface} from "../../models/itemQuantity.interface";

@Component({
  selector: 'app-simple-item',
  templateUrl: './simple-item.component.html',
  styleUrls: ['./simple-item.component.css']
})
export class SimpleItemComponent implements OnInit {

  items: itemsInterface[] = [];


  constructor(private apiService: ApiService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.apiService.getAllItems().subscribe({next: (data: itemsInterface[]) => {
      this.items = data;
      }});
    // this.apiService.login(request).subscribe({next : (data: string) => {
    //     this.message = "Success";
    //   },
    //   error: (error) => {
    //     this.message = "Wrong Password/Unregistered"
    //     console.log(error);
    //   },
    // },);


  }

  set() {
    let i : itemsQuantityInterface[] = [];
    this.items.forEach(function(data){
      let add: itemsQuantityInterface = {
        item: data,
        quantity: 2
      }
      i.push(add);
    });
    this.storageService.updateCart(i);

  }

  get(){
    console.log(this.storageService.getCart());
  }
}

