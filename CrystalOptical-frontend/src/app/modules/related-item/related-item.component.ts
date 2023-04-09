import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'related-item',
  templateUrl: './related-item.component.html',
  styleUrls: ['./related-item.component.css']
})

export class RelatedItemComponent implements OnInit {
  items: any[] =[
    { name: "Glasses 1", price: 123.45, stars: 4.6, reviews: 12 },
    { name: "Glasses 2", price: 234.56, stars: 4.8, reviews: 124 },
    { name: "Glasses 3", price: 345.67, stars: 5, reviews: 22 },
    { name: "Glasses 4", price: 456.78, stars: 1.4, reviews: 98 },
    { name: "Glasses 5", price: 567.89, stars: 3.2, reviews: 483 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
