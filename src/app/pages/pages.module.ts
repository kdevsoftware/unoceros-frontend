import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsModule } from "../components/components.module";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule]
})
export class PagesModule {}
