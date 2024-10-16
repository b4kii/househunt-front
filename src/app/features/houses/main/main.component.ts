import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "../../../layout/main/main-layout.component";
import { ButtonModule } from "primeng/button";
import { TabMenuModule } from "primeng/tabmenu";
import { MenuItem } from "primeng/api";
import { FiltersComponent } from '../components/filters/filters.component';

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
    FiltersComponent,
  ],
  templateUrl: "./ui/main.component.html",
})
export class MainComponent implements OnInit {
  protected router = inject(Router);

  protected items: MenuItem[] = [];

  protected activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: "Najnowsze", icon: "pi pi-hourglass", route: "/newest" },
      { label: "Blisko Ciebie", icon: "pi pi-map-marker", route: "/closest" },
      { label: "Wyszukiwanie", icon: "pi pi-search", route: "/search" },
    ];

    this.setActiveItem();

    this.router.events.subscribe(() => {
      this.setActiveItem();
    });
  }

  setActiveItem() {
    const currentRoute = this.router.url;

    const matchingItem = this.items.find(
      item => item["route"] === currentRoute
    );

    this.activeItem = matchingItem ? matchingItem : undefined;
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
