import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppHeaderComponent} from "./modules/app-header/app-header.component";
import {ItemDataComponent} from "./modules/item-data/item-data.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CheckoutPageComponent} from "./modules/checkout-page/checkout-page.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AppFooterComponent} from "./modules/app-footer/app-footer.component";
import {LogInComponent} from "./modules/log-in/log-in.component";
import {CreateAccountComponent} from "./modules/create-account/create-account.component";
import {PaymentComponent} from "./modules/payment/payment.component";
import {ChatbotComponent} from "./modules/chatbot/chatbot.component";
import { OrderInfoComponent } from './modules/order-info/order-info.component';
import {CataloguePageComponent} from "./modules/catalogue-page/catalogue-page.component";
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from "@angular/material/select";
import {FrontPageComponent} from "./modules/front-page/front-page.component";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {RatingComponent} from "./modules/rating-component/rating-component";

@NgModule({
  declarations: [AppComponent,
    AppHeaderComponent,
    ItemDataComponent,
    CheckoutPageComponent,
    AppFooterComponent,
    LogInComponent,
    CreateAccountComponent,
    PaymentComponent,
    ChatbotComponent,
    OrderInfoComponent,
    FrontPageComponent,
    ItemDataComponent,
    RatingComponent,
    ItemDataComponent,
    CataloguePageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatButtonToggleModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatSelectModule,
        MatIconModule,
        MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
