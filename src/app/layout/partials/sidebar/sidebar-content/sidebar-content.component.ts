import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: "hh-sidebar-content",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    @for (item of sidebarItems; track item.route) {
      <div>
        <a [routerLink]="item.route">{{item.label}}</a>
      </div>
    }
  `
})
export class SidebarContentComponent {
  protected sidebarItems = [
    { label: "Stwórz", route: "/create" },
    { label: "Ostatnio widziane", route: "/last-seen" },
  ];
}
