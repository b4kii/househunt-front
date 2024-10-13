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
      <hh-nav></hh-nav>
      <div class='relative flex flex-grow'>
        <hh-sidebar></hh-sidebar>
        <main class='flex-1 p-6'>
          <ng-content></ng-content>
        </main>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {
}
