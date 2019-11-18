import { Injectable } from "@angular/core";

declare let $: any;

@Injectable({
  providedIn: "root"
})
export class GlobalsService {
  fullScreen = false;
  background = `linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, .2) 51%, rgba(255, 255, 255, .09) 55%, transparent 56%, transparent) top left / 35px 35px repeat, linear-gradient( 90deg, transparent 50%, rgba(255, 255, 255, .2) 51%, rgba(255, 255, 255, .09) 55%, transparent 56%, transparent) top left / 35px 35px repeat, #0592FF`;

  constructor() {}

  setFullScreen(fullScreen) {
    this.fullScreen = fullScreen;

    if (this.fullScreen) {
      $(".u-window").addClass("full-screen");
      $("[name='full-screen']").text("Close Fullscreen");
    } else {
      $(".u-window").removeClass("full-screen");
      $("[name='full-screen']").text("Enter Fullscreen");
    }
  }
}
