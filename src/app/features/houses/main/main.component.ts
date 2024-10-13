import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";

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
    NgxMaskDirective,
    RouterLink,
    MainLayoutComponent,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
  ],
  templateUrl: "./ui/main.component.html",
})
export class MainComponent implements OnInit {
  // items: MenuItem[] = [
  //   { label: "Dashboard", icon: "pi pi-home" },
  //   { label: "Transactions", icon: "pi pi-chart-line" },
  //   { label: "Products", icon: "pi pi-list" },
  // ];

  items: MenuItem[] = [];

  // activeItem: MenuItem = this.items[0];

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
