import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: "hh-sidebar-content",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="py-4 px-6 flex flex-col gap-4">
      @for (item of sidebarItems; track item.route) {
        <a [routerLink]="item.route" class="block bg-gray-100 py-1 rounded-lg">
        <span class="px-4">
          {{ item.label }}
        </span>
        </a>
      }
    </div>
  `
})
export class SidebarContentComponent {
  protected sidebarItems = [
    { label: "Stwórz", route: "/" },
    { label: "Ostatnio widziane", route: "/" },
    { label: "Ustawienia", route: "/" },
  ];
}
