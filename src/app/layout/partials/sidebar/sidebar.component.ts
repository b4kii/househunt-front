import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "hh-sidebar",
  standalone: true,
  imports: [RouterOutlet, SidebarContentComponent, Drawer, ButtonModule],
  template: `
    <div
      class="hidden lg:block lg:w-[300px] lg:h-full lg:border-r lg:border-1 lg:border-gray-300 ">
      <hh-sidebar-content />
    </div>
    <div class="card flex justify-center">
      <p-drawer
        [(visible)]="active"
        (onHide)="activeChange()"
        styleClass="md:!w-80 lg:!w-[30rem] !p-0">
        <hh-sidebar-content [active]="active" (activeChangeEvent)="activeChange()" />
      </p-drawer>
    </div>
  `,
})
export class SidebarComponent {
  @Input() active: boolean = false;
  @Output() activeChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  activeChange() {
    this.activeChangeEvent.emit();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (width >= 1024 && this.active) {
      this.activeChange()
    }
  }
}
