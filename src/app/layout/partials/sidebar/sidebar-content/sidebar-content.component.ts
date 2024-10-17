import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: "hh-sidebar-content",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  template: `
    <div class="py-4 px-6 flex flex-col gap-4">
      @for (item of sidebarItems; track item.label) {
        <a
          [routerLink]="item.route"
          [ngClass]="['py-1 rounded-lg', item.active ? 'bg-gray-100' : '']">
          <span class="px-4 font-medium">
            {{ item.label }}
          </span>
        </a>
      }
    </div>
  `,
})
export class SidebarContentComponent implements OnInit {
  protected router = inject(Router);
  @Input() active!: boolean;
  @Output() activeChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  activeChange() {
    this.activeChangeEvent.emit();
  }

  protected sidebarItems = [
    { label: "Stwórz", route: "/closest", active: false },
    { label: "Ostatnio widziane", route: "/newest", active: false },
    { label: "Ustawienia", route: "/settings", active: false },
  ];

  ngOnInit() {
    this.setActiveItem();

    this.router.events.subscribe(() => {
      this.setActiveItem();
    });
  }

  protected setActiveItem() {
    const currentRoute = this.router.url;

    const matchingItem = this.sidebarItems.find(
      item => item.route === currentRoute
    );

    this.sidebarItems.forEach(item => item.active = false);

    if (matchingItem) {
      matchingItem.active = true;
      if (this.active) {
        this.activeChange();
      }
    }
  }
}
