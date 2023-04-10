import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CheckoutPageComponent} from "./modules/checkout-page/checkout-page.component";
import {ItemDataComponent} from "./modules/item-data/item-data.component";
import {PaymentComponent} from "./modules/payment/payment.component";
import {LogInComponent} from "./modules/log-in/log-in.component";
import {CreateAccountComponent} from "./modules/create-account/create-account.component";
import {OrderInfoComponent} from "./modules/order-info/order-info.component";
import {FrontPageComponent} from "./modules/front-page/front-page.component";
import {CataloguePageComponent} from "./modules/catalogue-page/catalogue-page.component";
import {OrderComponent} from "./modules/order/order.component";
import {AddItemComponent} from "./modules/add-item/add-item.component";

const routes: Routes = [
  {path: "login", component: LogInComponent},
  {path: "register", component: CreateAccountComponent},
  {path: "items", component: CataloguePageComponent},
  {path: "item/:id", component: ItemDataComponent},
  {path: "checkout", component: CheckoutPageComponent},
  {path: "itemsExample", component: ItemDataComponent},
  {path: "payment", component: PaymentComponent},
  {path: "orderinfo/:id", component: OrderInfoComponent},
  {path: "orderinfo", component: OrderComponent},
  {path: "browse", component: CataloguePageComponent},
  {path: "home", component: FrontPageComponent},
  {path: "additem", component: AddItemComponent},
  {path: "**", redirectTo: "home"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
