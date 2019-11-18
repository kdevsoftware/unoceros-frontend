import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import { jqxWindowComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow";
import { AppComponent } from "./app.component";
import { FakeDbService } from "./fake-db/fake-db.service";

@NgModule({
  declarations: [AppComponent, jqxWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
