import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenubarComponent } from "./menubar/menubar.component";
import { DesktopComponent } from "./desktop/desktop.component";
import { DesktopItemComponent } from "./desktop-item/desktop-item.component";

import { MessageService } from "../services/message.service";

@NgModule({
  declarations: [MenubarComponent, DesktopComponent, DesktopItemComponent],
  imports: [CommonModule],
  exports: [
    CommonModule,
    MenubarComponent,
    DesktopComponent,
    DesktopItemComponent
  ],
  providers: [MessageService]
})
export class ComponentsModule {}
