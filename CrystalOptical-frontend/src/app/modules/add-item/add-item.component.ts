import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {orderInfoInterface} from "../../models/order";
import {errorInterface, messageInterface} from "../../models/message.interface";
import {addItemInterface} from "../../models/items.interface";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.apiService.adminRole().subscribe({next : (data: messageInterface) => {},
      error: (error) => {
        this.router.navigateByUrl("/");
      },
    },);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      brand: ["", [Validators.required]],
      frameSize: ["", [Validators.required]],
      colour: ["", [Validators.required]],
      itemStock: ["", [Validators.required]],
      imagePath: ["", [Validators.required]],
    });
  }

  onSubmit(){
    console.log("test");
    let addRequest : addItemInterface = {
      name: this.form.value.name,
      price: this.form.value.price,
      brand: this.form.value.brand,
      frameSize: this.form.value.frameSize,
      colour: this.form.value.colour,
      itemStock: this.form.value.itemStock,
      imagePath: this.form.value.imagePath
    }
    this.apiService.addItem(addRequest).subscribe({next : (data: messageInterface) => {
        this.router.navigateByUrl("/browse");
      },
      error: (error) => {
      },
    },);
  }

}
