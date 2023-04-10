import {Component, OnInit} from '@angular/core'
import {itemsInterface} from "../../models/items.interface";
import {ApiService} from "../../services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

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
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.apiService.getAllItems().subscribe({next: (data: itemsInterface[]) => {
        this.items = data;
      }});
    this.initForm();
  }

  onSubmit() {
    let se = this.form.value.search;
    let sb = this.form.value.sortby;
    let b = this.form.value.brand;
    if(se == "") { se = "*";}
    if(sb == "") { sb = "*";}
    if(b == "") { b = "*";}
    this.apiService.getAllItemsFilter(b, se, sb).subscribe({next: (data: itemsInterface[]) => {
        this.items = data;
      }});
  }

  initForm() {
    this.form = this.fb.group({
      search: ["", [Validators.required]],
      sortby: "",
      brand: ""
    });
  }





}

