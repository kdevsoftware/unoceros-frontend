import { Component, OnInit } from "@angular/core";
import { desktopItems } from "src/app/fake-db/desktop-items";
import { UWindowsService } from "src/app/services/u-windows.service";
import { GlobalsService } from "src/app/services/globals.service";

declare let $: any;

@Component({
  selector: "desktop",
  templateUrl: "./desktop.component.html",
  styleUrls: ["./desktop.component.scss"]
})
export class DesktopComponent implements OnInit {
  desktopItems = desktopItems;
  tabletWidth = 768;

  constructor(
    public uWindowsService: UWindowsService,
    public globals: GlobalsService
  ) {}

  ngOnInit() {}

  getOptions(index, items) {
    if (items[index].id == "trash") {
      return {
        position:
          $(window).width() <= this.tabletWidth ? "relative" : "absolute",
        right: "0px",
        bottom: "0px"
      };
    } else {
      return {
        "margin-bottom": "36px",
        "margin-right": "36px"
      };
    }
  }

  onResize(event) {
    if ($(window).width() <= this.tabletWidth) {
      this.globals.setFullScreen(true);
    }
    this.uWindowsService.updateDragAreaOfUWindows();
  }
}
