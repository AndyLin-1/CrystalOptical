import { Injectable } from '@angular/core';
import {LoginRequestInterface} from "../models/items.interface";
import {itemsInterface} from "../models/loginRequest.interface";

const LOGGED_IN_COOKIE = "logged_in";
const CART = "cart";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  userLoggedIn(): boolean {
    return this.getCookie(LOGGED_IN_COOKIE) == "true";
  }

  getCart() : itemsInterface[] {
    return JSON.parse(<string>this.getCookie(CART));
  }

  updateCart(items : itemsInterface[]) {
    this.setCookie(CART, JSON.stringify(items), 21600);
  }

  login(request : LoginRequestInterface, token: string): void
  {
    this.setCookie(LOGGED_IN_COOKIE, token, 1800);
  }

  async logout() {
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


}
