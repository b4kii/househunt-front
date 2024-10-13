import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { MenuItem } from "primeng/api";

@Component({
  selector: "hh-nav-profile-dropdown",
  standalone: true,
  imports: [RouterLink, ButtonModule, MenuModule],
  template: `
    <div class="card flex justify-center">
      <p-button (click)="menu.toggle($event)" icon="pi pi-user" />
      <p-menu #menu [model]="items" [popup]="true">
        <ng-template pTemplate="item" let-item>
          <ng-container>
            <a [routerLink]="item.route" class="p-menu-item-link">
              <span [class]="item.icon"></span>
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </ng-container>
        </ng-template>
      </p-menu>
    </div>
  `,
})
export class NavProfileDropdownComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: "Twoje konto",
        items: [
          {
            label: "Logowanie",
            icon: "pi pi-sign-in",
            route: "/login"
          },
          {
            label: "Rejestracja",
            icon: "pi pi-user-plus",
            route: "/register"
          },
        ],
      },
    ];
  }
}
