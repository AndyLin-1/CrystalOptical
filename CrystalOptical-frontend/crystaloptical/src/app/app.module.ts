import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SimpleRegisterComponent } from './modules/simple-register/simple-register.component';
import { SimpleItemComponent } from './modules/simple-item/simple-item.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ItemDataComponent } from './item-data/item-data.component';
import { RelatedItemComponent } from './related-item/related-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { CheckoutTitleHeaderComponent } from './checkout-title-header/checkout-title-header.component';
import { SingularItemPageComponent } from './singular-item-page/singular-item-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AppComponent, SimpleInterfaceComponent, SimpleRegisterComponent, SimpleItemComponent, AppHeaderComponent, ItemDataComponent, RelatedItemComponent, CheckoutTitleHeaderComponent, SingularItemPageComponent, CheckoutPageComponent, CheckoutItemComponent],
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
