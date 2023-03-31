import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SimpleInterfaceComponent} from "./modules/simple-interface/simple-interface.component";

const routes: Routes = [
  {path: "login", component: SimpleInterfaceComponent},
  {path: "**", redirectTo: "/"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
