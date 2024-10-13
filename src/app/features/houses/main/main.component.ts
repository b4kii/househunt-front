import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterLink, RouterOutlet } from "@angular/router";
import { MainLayoutComponent } from "../../../layout/main/main-layout.component";
import { ButtonModule } from "primeng/button";
import { TabMenuModule } from "primeng/tabmenu";
import { MenuItem } from "primeng/api";

@Component({
  selector: "hh-main",
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MainLayoutComponent,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
  ],
  templateUrl: "./ui/main.component.html",
})
export class MainComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: "Najnowsze", icon: "pi pi-hourglass", route: "/houses-newest" },
      { label: "Blisko Ciebie", icon: "pi pi-map-marker", route: "/houses-closest" },
      { label: "Wyszukiwanie", icon: "pi pi-search", route: "/"},
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
