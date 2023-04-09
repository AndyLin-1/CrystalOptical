import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  update() : number {
    return this.storageService.getCartQuantity();
  }

  getName() : string {
    console.log(this.storageService.userLoggedIn());
    if(this.storageService.userLoggedIn()) {
      return this.storageService.getName();
    }
    return "";
  }

}
