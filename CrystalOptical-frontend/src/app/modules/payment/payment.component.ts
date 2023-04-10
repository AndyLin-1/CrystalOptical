import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {LoginRequestInterface} from "../../models/loginRequest.interface";
import {orderInfoInterface, orderInterface, paymentInterface} from "../../models/order";
import {UserSessionInterface} from "../../models/userSession.interface";
import {errorInterface} from "../../models/message.interface";
import {itemsQuantityInterface} from "../../models/itemQuantity.interface";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form!: FormGroup;
  shippingform!: FormGroup;
  total: number = 0;
  message: string = "";

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.storageService.getCart().length <= 0){
      this.router.navigateByUrl("/");
    }
    if(!this.storageService.userLoggedIn()){
      this.router.navigateByUrl("/login");
    }
    this.total = this.calculateTotal();
    this.initForm();
  }

  onSubmit() {
    let shipping = this.shippingform.value.address +
      ", " + this.shippingform.value.city + ", " +
      this.shippingform.value.province + ", " + this.shippingform.value.country + " " +
      this.shippingform.value.zip;
    let paymentRequest1: paymentInterface = {
      name: this.form.value.name,
      cardNumber: this.form.value.creditCard,
      expiryMonth: this.form.value.creditCardDateMonth,
      expiryYear: this.form.value.creditCardDateYear,
      securityCode: this.form.value.creditCardCvv
    };

    let orderRequest: orderInterface = {
      userId: 1,
      order: this.storageService.getCart(),
      paymentRequest: paymentRequest1,
      address: shipping
    }
    this.apiService.sendOrder(orderRequest).subscribe({next : (data: orderInfoInterface) => {
        this.storageService.updateCart([]);
        this.router.navigateByUrl("/orderinfo/" + data.orderId);
      },
      error: (error: errorInterface) => {
        this.message = error.error.message;
      },
    },);
  }

  test(){
    console.log(this.shippingform);
  }

  initForm(){
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      creditCard: ["", [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      creditCardDateMonth: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      creditCardDateYear: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      creditCardCvv: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });

    this.shippingform = this.fb.group({
      email: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: ["", [Validators.required]],
      country: ["", [Validators.required]],
      province: ["", [Validators.required]],
      city: ["", [Validators.required]],
      zip: ["", [Validators.required]]
    });
  }

  calculateTotal(): number{
    let items = this.storageService.getCart();
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += ((items)[i].item.price * (items)[i].quantity);
    }
    return total;
  }
}
