import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";
import {SimpleRegisterComponent} from "./modules/simple-register/simple-register.component";
import {SimpleItemComponent} from "./modules/simple-item/simple-item.component";
import {CheckoutPageComponent} from "./modules/checkout-page/checkout-page.component";
import {ItemDataComponent} from "./modules/item-data/item-data.component";

const routes: Routes = [
  {path: "login", component: SimpleInterfaceComponent},
  {path: "register", component: SimpleRegisterComponent},
  {path: "items", component: SimpleItemComponent},
  {path: "item/:id", component: ItemDataComponent},
  {path: "checkout", component: CheckoutPageComponent},
  {path: "**", redirectTo: "/"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
