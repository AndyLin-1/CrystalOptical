import { Injectable } from '@angular/core';
import {LoginRequestInterface} from "../models/loginRequest.interface";
import {itemsQuantityInterface} from "../models/itemQuantity.interface";

const LOGGED_IN_COOKIE = "logged_in";
const CART = "cart";
const NAME = "name";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  userLoggedIn(): boolean {
    return this.getCookie(LOGGED_IN_COOKIE) != null;
  }

  getJwt(): string {
    return <string>this.getCookie(LOGGED_IN_COOKIE);
  }

  getCart() : itemsQuantityInterface[] {
    let cart = <string>this.getCookie(CART);
    if(cart != null){
      return JSON.parse(cart);
    }
    return [];
  }

  updateCart(items : itemsQuantityInterface[]) {
    this.setCookie(CART, JSON.stringify(items), 21600);
  }

  getCartQuantity() : number{
    let cart = <string>this.getCookie(CART);
    let list;
    let total = 0;
    if (cart != null) {
      list = <itemsQuantityInterface[]>JSON.parse(cart);
      list.forEach(function(data){
        total = total + data.quantity;
      })
    }
    return total;
  }

  getName() : string {
    return <string>this.getCookie(NAME);
  }

  login(name: string, token: string): void
  {
    this.setCookie(NAME, name, 1800);
    this.setCookie(LOGGED_IN_COOKIE, token, 1800);
  }

  async logout() {
    this.setCookie(NAME, "false", 0);
    this.setCookie(LOGGED_IN_COOKIE, "false", 0);
  }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const parts = cookie.split("=");
      if (parts[0].trim() === name) {
        return parts[1];
      }
    }
    return null;
  }

  setCookie(name: string, value: string, seconds: number) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }


  getUserId() {
    return 1;
  }
}
