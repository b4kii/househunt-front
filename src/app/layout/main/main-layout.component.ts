import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from '../partials/nav/nav.component';
import {FooterComponent} from '../partials/footer/footer.component';
import {SidebarComponent} from '../partials/sidebar/sidebar.component';

@Component({
  selector: 'hh-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent,
    SidebarComponent,
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <hh-nav [active]="sidebarActive" (activeChangeEvent)="changeVisibility()"></hh-nav>
      <div class='relative flex flex-grow'>
<!--        <hh-sidebar></hh-sidebar>-->
        <hh-sidebar [active]="sidebarActive" (activeChangeEvent)="changeVisibility()"></hh-sidebar>
        <main class='flex-1 p-6'>
          <ng-content></ng-content>
        </main>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {
  // just for testing, but im gonna leave this maybe to remember about sharing state between parent and child
  // next time ill have to use subject from service
  sidebarActive: boolean = false;

  changeVisibility() {
    console.log(this.sidebarActive);
    this.sidebarActive = !this.sidebarActive;
  }
}
