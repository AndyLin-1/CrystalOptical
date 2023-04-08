import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ItemDataComponent} from "./item-data/item-data.component";
import {LogInComponent} from "./modules/log-in/log-in.component";
import {CreateAccountComponent} from "./modules/create-account/create-account.component";
import {CheckComponent} from "./modules/checkout/check.component";

const routes: Routes = [
  {path: "login", component: LogInComponent},
  {path: "register", component: CreateAccountComponent},
  {path: "itemsExample", component: ItemDataComponent},
  {path: "payment", component: CheckComponent},
  {path: "**", redirectTo: "/"}];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}