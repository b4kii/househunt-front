import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterLink, RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TabMenuModule } from "primeng/tabmenu";
import { MenuItem } from "primeng/api";
import { AuthLayoutComponent } from '../../layout/auth/auth-layout.component';

@Component({
  selector: "hh-auth",
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
    AuthLayoutComponent,
  ],
  // templateUrl: "./ui/main.component.html",
  template: `
<!--    <div class="h-screen flex flex-col items-center justify-center">-->
    <div class="h-screen grid grid-rows-[1fr_1fr]">
      <div class="card">
        <p-tabmenu
          [model]="items"
          [activeItem]="activeItem"
          (activeItemChange)="onActiveItemChange($event)"
        >
          <ng-template pTemplate="item" let-item>
            <ng-container>
              <a [routerLink]="item.route" class="p-menuitem-link">
                <span>
                  {{ item.label }}
                </span>
              </a>
            </ng-container>
          </ng-template>
        </p-tabmenu>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AuthComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: "Logowanie", route: "/auth/login" },
      { label: "Rejestracja", route: "/auth/register",
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
