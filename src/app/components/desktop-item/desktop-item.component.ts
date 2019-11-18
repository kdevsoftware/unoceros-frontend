import { Component, OnInit, Input } from "@angular/core";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "desktop-item",
  templateUrl: "./desktop-item.component.html",
  styleUrls: ["./desktop-item.component.scss"]
})
export class DesktopItemComponent implements OnInit {
  @Input() id: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() message: string;
  @Input() options: any;

  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  onDblDesktopItem(message) {
    this.messageService.detectMessage(message);
  }
}
