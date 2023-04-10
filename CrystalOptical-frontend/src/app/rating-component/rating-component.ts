import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating-component',
  templateUrl: './rating-component.html',
  styleUrls: ['./rating-component.css']

})
export class RatingComponent implements OnInit {
  ngOnInit(): void {

  }

  public stars: boolean[] = Array(5).fill(false);

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }

  }



