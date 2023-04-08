import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppHeaderComponent } from './modules/app-header/app-header.component';
import { AppFooterComponent } from './modules/app-footer/app-footer.component';
import { ItemDataComponent } from './item-data/item-data.component';
import { RelatedItemComponent } from './related-item/related-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { LogInComponent } from './modules/log-in/log-in.component';
import {NgOptimizedImage} from "@angular/common";
import { CheckComponent } from './modules/checkout/check.component';


@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, ItemDataComponent, RelatedItemComponent, CreateAccountComponent, LogInComponent, CheckComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonToggleModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
