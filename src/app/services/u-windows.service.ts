import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalsService } from "./globals.service";

declare let $: any;

@Injectable({
  providedIn: "root"
})
export class UWindowsService {
  containerId = "desktop";
  uWindows = [];

  tabletWidth = 768;
  uWindowOffsetY = 58;
  uWindowOffsetX = 97;
  uWindowMenubarHeight = 40;
  uWindowWidth = 773;
  uWindowHeight = 593;
  uWindowMinWidth = 320;
  uWindowMinHeight = 360;

  constructor(public _httpClient: HttpClient, public globals: GlobalsService) {}

  init() {
    this.uWindows = [];
  }

  closeAll() {
    $(".u-window").remove();
    this.init();
  }

  openWindow(windowId) {
    if (!this.isOpened(windowId)) {
      this.getWindowInfo(windowId).subscribe(retVal => {
        const windowInfo = retVal;

        this.generateUWindow(windowInfo);
        this.addWindow(windowId);
      });
    } else {
      $("#" + windowId).jqxWindow("bringToFront");
    }

    this.updateDragAreaOfUWindows();
  }

  isOpened(windowId) {
    if (this.uWindows.indexOf(windowId) >= 0) {
      return true;
    }

    return false;
  }

  getWindowInfo(windowId) {
    return this._httpClient.get("api/window/" + windowId);
  }

  addWindow(windowId) {
    this.uWindows.push(windowId);
  }

  removeWindow(windowId) {
    this.uWindows.splice(this.uWindows.indexOf(windowId), 1);
  }

  generateUWindow(uWindowInfo) {
    this.setScrollbarStyle();

    let windowE = $("<div>", { id: uWindowInfo.id, class: "u-window" });

    if (this.globals.fullScreen) {
      windowE.addClass("full-screen");
    }

    let windowHeaderE = $("<div>", { class: "u-window-header" });
    let windowContentE = $("<div>", { class: "u-window-content" });

    let uWindowTitle =
      this.isMobile() && $(window).width() < this.tabletWidth
        ? uWindowInfo.mobile_title
        : uWindowInfo.title;

    windowHeaderE.append(
      "<div class='u-window-header-text'>" + uWindowTitle + "</div>"
    );
    windowContentE.append(this.generateUContentSection(uWindowInfo));

    windowE.append(windowHeaderE);
    windowE.append(windowContentE);

    $("#" + this.containerId).append(windowE);

    jqwidgets.createInstance(
      "#" + uWindowInfo.id,
      "jqxWindow",
      this.generateUWindowSettings()
    );

    this.addMovedEvent(uWindowInfo);
    this.addFullscreenButton(uWindowInfo);
    this.addFullscreenEvent(uWindowInfo);
    this.addClosescreenEvent(uWindowInfo);
    this.addItemDblClickEvent();
    this.addItemTouchEndEvent();
  }

  generateUContentSection(uWindowInfo) {
    let contentHtml = "";

    switch (uWindowInfo.type) {
      case "blog-list": {
        contentHtml = `<div class="content-blog-list">`;

        for (let i = 0; i < uWindowInfo.items.length; i++) {
          let contentBlog = uWindowInfo.items[i];
          let contentBlogHtml = `
            <div class="content-blog">
              <div class="blog-section" open_window="${contentBlog.message}">
                <img class="blog-image" src="${contentBlog.image}">
              </div>
              <div class="title-section" open_window="${contentBlog.message}">
                <p class="title-text">${contentBlog.title}</p>
              </div>
            </div>
          `;

          contentHtml += contentBlogHtml;
        }

        contentHtml += `</div>`;

        break;
      }

      case "item-list": {
        contentHtml = `<div class="content-item-list">`;

        for (let i = 0; i < uWindowInfo.items.length; i++) {
          let contentItem = uWindowInfo.items[i];
          let contentItemHtml = `
            <div class="content-item">
              <div class="icon-section" open_window="${contentItem.message}">
                <img class="icon-image" src="${contentItem.icon}">
              </div>
              <div class="title-section" open_window="${contentItem.message}">
                <p class="title-text">${contentItem.title}</p>
              </div>
            </div>
          `;

          contentHtml += contentItemHtml;
        }

        contentHtml += `</div>`;

        break;
      }

      case "background-list": {
        contentHtml = `<div class="content-background-list">`;

        for (let i = 0; i < uWindowInfo.backgrounds.length; i++) {
          let contentBackground = uWindowInfo.backgrounds[i];
          let contentBackgroundHtml;

          if (this.globals.background == contentBackground.background) {
            contentBackgroundHtml = `<div class="content-background active-background"`;
          } else {
            contentBackgroundHtml = `<div class="content-background"`;
          }

          contentBackgroundHtml += `
              style="background: ${contentBackground.background}" change_background="${contentBackground.background}">
              <div class="title-section">
                <p class="title-text">${contentBackground.title}</p>
              </div>
            </div>
          `;

          contentHtml += contentBackgroundHtml;
        }

        contentHtml += `</div>`;

        break;
      }

      case "html": {
        contentHtml = uWindowInfo.content;
      }
    }

    return contentHtml;
  }

  generateUWindowSettings() {
    let result;

    result = {
      width: this.uWindowWidth,
      height: this.uWindowHeight,
      minWidth: this.uWindowMinWidth,
      minHeight: this.uWindowMinHeight,
      maxWidth: $(window).width(),
      maxHeight: $(window).height(),
      position: this.generateUWindowPosition()
    };

    return result;
  }

  generateUWindowPosition() {
    if ($(window).width() <= this.tabletWidth) {
      return {
        x: 0,
        y: this.uWindowMenubarHeight
      };
    }

    let position;

    if (this.uWindows.length > 0) {
      const lastUWindowPosition = $(
        "#" + this.uWindows[this.uWindows.length - 1]
      ).jqxWindow("position");
      position = {
        x: lastUWindowPosition.x + this.uWindowOffsetX,
        y: lastUWindowPosition.y + this.uWindowOffsetY
      };
    } else {
      position = {
        x: ($(window).width() - this.uWindowWidth) / 3,
        y: ($(window).height() - this.uWindowHeight) / 3 + 40
      };
    }

    if (!this.isAvailable(position)) {
      return {
        x: 0,
        y: this.uWindowMenubarHeight
      };
    }

    return position;
  }

  updateDragAreaOfUWindows() {
    let dragArea = {
      left: 0,
      top: $("#" + this.containerId).css("top"),
      width: $("#" + this.containerId).css("width"),
      height: $("#" + this.containerId).css("height")
    };

    this.uWindows.map(uWindowId => {
      $("#" + uWindowId).jqxWindow({ dragArea: dragArea });
    });
  }

  addFullscreenButton(uWindowInfo) {
    $("<div>", {
      class: "jqx-window-maximum-button-background"
    })
      .append(
        $("<div>", {
          class: "jqx-window-maximum-button"
        })
      )
      .insertBefore(
        $("#" + uWindowInfo.id + " .jqx-window-close-button-background")
      );
  }

  addFullscreenEvent(uWindowInfo) {
    $("#" + uWindowInfo.id + " .jqx-window-maximum-button").click(function() {
      let targetWindow = $("#" + uWindowInfo.id);

      if (targetWindow.hasClass("full-screen")) {
        targetWindow.removeClass("full-screen");
      } else {
        targetWindow.addClass("full-screen");
      }
    });
  }

  addClosescreenEvent(uWindowInfo) {
    let obj = this;
    $("#" + uWindowInfo.id).on("close", function(event) {
      $("#" + uWindowInfo.id).remove();
      obj.removeWindow(uWindowInfo.id);
    });
  }

  addItemDblClickEvent() {
    let obj = this;
    $("[open_window]").on("dblclick", function(event) {
      let uWindowId = $(this).attr("open_window");
      obj.openWindow(uWindowId);
    });

    $("[change_background]").on("click", function(event) {
      obj.globals.background = $(this).attr("change_background");

      $(".content-background").removeClass("active-background");
      $(this).addClass("active-background");

      $("#desktop").css("background", obj.globals.background);
    });
  }

  addItemTouchEndEvent() {
    let obj = this;
    $("[open_window]").on("touchend", function(event) {
      let uWindowId = $(this).attr("open_window");
      obj.openWindow(uWindowId);
    });

    $("[change_background]").on("click", function(event) {
      obj.globals.background = $(this).attr("change_background");

      $(".content-background").removeClass("active-background");
      $(this).addClass("active-background");

      $("#desktop").css("background", obj.globals.background);
    });
  }

  addMovedEvent(uWindowInfo) {
    $("#" + uWindowInfo.id).on("moved", function(event) {
      $("#" + uWindowInfo.id).jqxWindow({
        position: { x: event.args.x, y: event.args.y }
      });
    });
  }

  isAvailable(position) {
    let currentDocumentWidth = $(window).width();
    let currentDocumentHeight = $(window).height();

    if (position.x + this.uWindowWidth > currentDocumentWidth) {
      return false;
    }

    if (
      position.y + this.uWindowHeight + this.uWindowMenubarHeight >
      currentDocumentHeight
    ) {
      return false;
    }

    return true;
  }

  isMobile() {
    let isMobile = false;

    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }

    return isMobile;
  }

  setScrollbarStyle() {
    let isMobile = this.isMobile();

    let styleTag = $(`
      <style id="desktop-scrollbar">
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: white;
          border-left: 2px solid black;
        }
        
        ::-webkit-scrollbar-thumb {
          background: black;
          border-right: 10px solid black;
          background-clip: content-box;
        }
      </style>
    `);

    if (!isMobile) {
      if ($("#desktop-scrollbar").length == 0) {
        $("html > head").append(styleTag);
      }
    } else {
      if ($("#desktop-scrollbar").length == 1) {
        $("#desktop-scrollbar").remove();
      }
    }
  }
}
