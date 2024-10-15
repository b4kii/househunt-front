import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavProfileDropdownComponent } from "./components/nav-profile-dropdown.component";
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "hh-nav",
  standalone: true,
  imports: [NavProfileDropdownComponent, RouterLink, ButtonModule],
  template: `
    <nav class="w-full border-b border-1 border-gray-300 flex items-center px-8 py-4">
      <p-button class="lg:hidden" (click)="activeChange()" icon="pi pi-bars" />
      <a routerLink="/" class="mx-auto lg:m-0">House Hunt</a>
      <div class="lg:ml-auto">
        <hh-nav-profile-dropdown></hh-nav-profile-dropdown>
      </div>
    </nav>
  `
})
export class NavComponent {
  @Input() active: boolean = false;
  @Output() activeChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  activeChange() {
    this.activeChangeEvent.emit();
  }
}
