import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { DesktopItemComponent } from './components/desktop-item/desktop-item.component';
import { MenubarComponent } from './components/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    DesktopItemComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
