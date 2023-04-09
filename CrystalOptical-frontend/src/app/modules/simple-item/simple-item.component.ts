import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {itemsInterface} from "../../models/loginRequest.interface";
import {StorageService} from "../../services/storage.service";

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
    this.storageService.updateCart(this.items);
  }

  get(){
    console.log(this.storageService.getCart());
  }
}

