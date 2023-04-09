import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SimpleRegisterComponent } from './modules/simple-register/simple-register.component';
import { SimpleItemComponent } from './modules/simple-item/simple-item.component';
import {AppHeaderComponent} from "./modules/app-header/app-header.component";
import {ItemDataComponent} from "./modules/item-data/item-data.component";
import {RelatedItemComponent} from "./modules/related-item/related-item.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CheckoutPageComponent} from "./modules/checkout-page/checkout-page.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AppComponent, SimpleInterfaceComponent, SimpleRegisterComponent, SimpleItemComponent, AppHeaderComponent, ItemDataComponent, RelatedItemComponent, CheckoutPageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatButtonToggleModule,
        MatInputModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
