import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SimpleItemComponent} from "./modules/simple-item/simple-item.component";
import {CheckoutPageComponent} from "./modules/checkout-page/checkout-page.component";
import {ItemDataComponent} from "./modules/item-data/item-data.component";
import {PaymentComponent} from "./modules/payment/payment.component";
import {LogInComponent} from "./modules/log-in/log-in.component";
import {CreateAccountComponent} from "./modules/create-account/create-account.component";
import {OrderInfoComponent} from "./modules/order-info/order-info.component";

const routes: Routes = [
  {path: "login", component: LogInComponent},
  {path: "register", component: CreateAccountComponent},
  {path: "items", component: SimpleItemComponent},
  {path: "item/:id", component: ItemDataComponent},
  {path: "checkout", component: CheckoutPageComponent},
  {path: "itemsExample", component: ItemDataComponent},
  {path: "payment", component: PaymentComponent},
  {path: "orderinfo/:id", component: OrderInfoComponent},
  {path: "**", redirectTo: "/"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
