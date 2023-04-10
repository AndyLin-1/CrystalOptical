import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  update() : number {
    return this.storageService.getCartQuantity();
  }

  getName() : string {
    if(this.storageService.userLoggedIn()) {
      return this.storageService.getName();
    }
    return "";
  }

  logOut(){
    console.log("loggedout");
    if(this.storageService.userLoggedIn()){
      this.storageService.logout().then(r => {
        this.router.navigateByUrl('/');
      });
    }
  }

}
