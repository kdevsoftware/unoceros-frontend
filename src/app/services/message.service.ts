import { Injectable } from "@angular/core";
import { UWindowsService } from "./u-windows.service";
import { GlobalsService } from "./globals.service";

declare let $: any;

@Injectable({
  providedIn: "root"
})
export class MessageService {
  tabletWidth = 768;

  constructor(
    public uWindows: UWindowsService,
    public globals: GlobalsService
  ) {}

  detectMessage(message) {
    if ($(window).width() <= this.tabletWidth) {
      this.globals.setFullScreen(true);
    }

    switch (message) {
      case "close-windows": {
        this.uWindows.closeAll();

        break;
      }

      case "quit-app": {
        this.quitApp();

        break;
      }

      case "full-screen": {
        this.globals.setFullScreen(!this.globals.fullScreen);

        break;
      }

      case "contact-us": {
        const to = "contact@unoceros.com";
        const sub = "Hello, Unoceros team.";
        document.location.href =
          "mailto:" + to + "?subject=" + encodeURIComponent(sub);

        break;
      }

      default: {
        this.uWindows.openWindow(message);

        break;
      }
    }
  }

  quitApp() {
    window.location.href = "https://www.google.com/search?q=unoceros";
  }
}
