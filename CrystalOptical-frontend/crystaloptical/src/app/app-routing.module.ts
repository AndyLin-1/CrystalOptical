import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";
import {SimpleRegisterComponent} from "./modules/simple-register/simple-register.component";
import {SimpleItemComponent} from "./modules/simple-item/simple-item.component";
import {SingularItemPageComponent} from "./singular-item-page/singular-item-page.component";
import {CheckoutPageComponent} from "./checkout-page/checkout-page.component";

const routes: Routes = [
  {path: "login", component: SimpleInterfaceComponent},
  {path: "register", component: SimpleRegisterComponent},
  {path: "items", component: SimpleItemComponent},
  {path: "singular-item", component: SingularItemPageComponent},
  {path: "checkout", component: CheckoutPageComponent},
  {path: "**", redirectTo: "/"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
