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
      class="hidden lg:block w-[300px] h-full border-r border-1 border-gray-300 px-8 py-4">
      <hh-sidebar-content />
    </div>
    <div class="card flex justify-center">
      <p-drawer
        header="Drawer"
        [(visible)]="active"
        (onHide)="activeChange()"
        styleClass="md:!w-80 lg:!w-[30rem]">
        <hh-sidebar-content />
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
      // this.active = false;
      this.activeChange()
    }
  }
}
