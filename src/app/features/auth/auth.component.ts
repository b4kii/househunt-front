import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
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
  template: `
    <!--    <div class="h-screen flex flex-col items-center justify-center">-->
    <!--    <div class="auth h-screen grid grid-cols-[300px] grid-rows-[300px_1fr] gap-12 justify-center">-->
    <div class="auth h-screen grid grid-cols-[300px] grid-rows-[100px_100px_1fr] gap-12 justify-center">
      <a routerLink="/" class="self-end justify-self-center text-5xl">House Hunt</a>
      <div class="self-end justify-self-center">
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
      </div>
      <div class="flex justify-center">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AuthComponent implements OnInit {
  protected router = inject(Router);

  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;


  ngOnInit() {
    this.items = [
      { label: "Logowanie", route: "/auth/login" },
      { label: "Rejestracja", route: "/auth/register",
      },
    ];

    this.setActiveItem();

    this.router.events.subscribe(() => {
      this.setActiveItem();
    });
  }

  setActiveItem() {
    const currentRoute = this.router.url;

    const matchingItem = this.items.find(item => item["route"] === currentRoute);

    this.activeItem = matchingItem ? matchingItem : undefined;
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
