import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { menus, mobileMenus } from "src/app/fake-db/menus";

import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"]
})
export class MenubarComponent implements OnInit, OnDestroy {
  menuItems = menus;
  mobleMenuItems = mobileMenus;
  mobileMenu: Boolean = false;
  today: String = "--/--/----";
  currentHour: String = "--";
  currentMinute: String = "--";
  currentMoment: String = "--";
  activeMenuId: number = -1;

  dateAndTimeSubscription: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    const dateAndTimeInterval = interval(1000);

    this.dateAndTimeSubscription = dateAndTimeInterval.subscribe(() => {
      const dateAndTime = this.getDateAndTime();

      this.today = dateAndTime.today;
      this.currentHour = dateAndTime.currentHour;
      this.currentMinute = dateAndTime.currentMinute;
      this.currentMoment = dateAndTime.currentMoment;
    });
  }

  ngOnDestroy() {
    this.dateAndTimeSubscription.unsubscribe();
  }

  showMenu() {
    this.mobileMenu = true;
  }

  hideMenu() {
    this.mobileMenu = false;
  }

  getDateAndTime() {
    let dateTime = new Date();
    let jsonDateAndTime = {
      today:
        dateTime.getDate() +
        "/" +
        (dateTime.getMonth() + 1) +
        "/" +
        dateTime.getFullYear(),
      currentHour:
        (dateTime.getHours() < 10 ? "0" : "") +
        (dateTime.getHours() <= 12
          ? dateTime.getHours()
          : dateTime.getHours() - 12),
      currentMinute:
        (dateTime.getMinutes() < 10 ? "0" : "") + dateTime.getMinutes(),
      currentMoment: dateTime.getHours() <= 12 ? "AM" : "PM"
    };

    return jsonDateAndTime;
  }

  onMenuItem(message) {
    this.hideMenu();
    this.showSubMenu(-1);
    this.messageService.detectMessage(message);
  }

  showSubMenu(menuIndex) {
    this.activeMenuId = menuIndex;
  }
}
