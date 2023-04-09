import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SimpleRegisterComponent } from './modules/simple-register/simple-register.component';
import { SimpleItemComponent } from './modules/simple-item/simple-item.component';

import {ProductComponent} from "./Product/product.component";
import {ItemComponent} from "./Item/item.component";

import { SearchbarComponent} from "./searchbar/searchbar.component";
import {Cataloguepage} from "./catalogue-page/catalogue-page.component";
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FrontPageComponent} from "./front-page/front-page.component";
import {MatIconModule} from "@angular/material/icon";
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";
import {RatingComponent} from './rating-component/rating-component';

@NgModule({
  declarations: [AppComponent, SimpleInterfaceComponent, SimpleRegisterComponent, SimpleItemComponent,FrontPageComponent,ProductComponent,ItemComponent ,SearchbarComponent,Cataloguepage, RatingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule, MatCardModule
    , MatChipsModule, MatInputModule, MatSelectModule, MatIconModule, MatGridListModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
