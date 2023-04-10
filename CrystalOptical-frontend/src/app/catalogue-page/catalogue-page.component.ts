import {Component, OnInit} from '@angular/core'
import {SearchbarComponent} from "../searchbar/searchbar.component";
import {ProductComponent} from "../Product/product.component";

/**
 * @title Basic select
 */

@Component({
  selector: 'catalogue-page.component',
  templateUrl: 'catalogue-page.component.html',
  styleUrls: ['catalogue-page.component.css'],
})
export class Cataloguepage implements OnInit{
  ngOnInit(): void {
  }

}

