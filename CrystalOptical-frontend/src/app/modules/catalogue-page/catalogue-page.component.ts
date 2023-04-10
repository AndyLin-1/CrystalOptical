import {Component, OnInit} from '@angular/core'
import {itemsInterface} from "../../models/items.interface";
import {ApiService} from "../../services/api.service";

/**
 * @title Basic select
 */

@Component({
  selector: 'catalogue-page.component',
  templateUrl: 'catalogue-page.component.html',
  styleUrls: ['catalogue-page.component.css'],
})
export class CataloguePageComponent implements OnInit{

  items : itemsInterface[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllItems().subscribe({next: (data: itemsInterface[]) => {
        this.items = data;
        console.log(data);
      }});
  }



}

