import {itemsInterface} from "./items.interface";
import {itemsQuantityInterface} from "./itemQuantity.interface";

export interface orderInterface {
  userId: number;
  order: itemsQuantityInterface[];
  paymentRequest: paymentInterface;
  address: string;
}

export interface paymentInterface{
  name: string;
  cardNumber: number;
  expiryMonth: number;
  expiryYear: number;
  securityCode: number;
}

export interface orderInfoInterface {
  orderId: number;
  userId: number;
  order: itemsQuantityInterface[];
  address: string;
}
