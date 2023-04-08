import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-simple-item',
  templateUrl: './simple-item.component.html',
  styleUrls: ['./simple-item.component.css']
})
export class SimpleItemComponent implements OnInit {

  items: itemsInterface[] = [];


  constructor(private apiService: ApiService) { }

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

}

export interface itemsInterface {
  id: number;
  name: string;
  price: number;
  brand: string;
  frameSize: string;
  colour: string;
  rating: number;
  ratingScore: number;
  ratingNumber: number;
  itemStock: number;
  imagePath: string;
}
