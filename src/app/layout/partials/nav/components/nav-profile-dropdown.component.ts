import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { MenuItem } from 'primeng/api';

@Component({
  selector: "hh-nav-profile-dropdown",
  standalone: true,
  imports: [RouterLink, ButtonModule, MenuModule],
  template: `
    <div class="card flex justify-center">
<!--      TODO: add some avatar maybe-->
<!--      <p-button (click)="menu.toggle($event)" icon="pi pi-user" />-->
      <p-button (click)="menu.toggle($event)" label="DH" />
      <p-menu #menu [model]="items" [popup]="true" appendTo="body">
        <ng-template pTemplate="item" let-item>
            <a [routerLink]="item.route" class="p-menu-item-link">
              <span [class]="item.icon"></span>
              <span class="ml-2">{{ item.label }}</span>
            </a>
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
            label: "Profil - AA",
            icon: "pi pi-user",
            command: () => {
              console.log("Logout action");
            }
          },
          {
            label: "Logowanie",
            icon: "pi pi-sign-in",
            route: "/auth/login",
          },
          {
            label: "Rejestracja",
            icon: "pi pi-user-plus",
            route: "/auth/register",
          },
          {
            label: "Wyloguj się - AA",
            icon: "pi pi-power-off",
            command: () => {
              console.log("Logout action");
            }
          },
        ],
      },
    ];
  }
}
