import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'hh-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-screen flex justify-center">
      <div class="flex flex-col items-center">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class AuthLayoutComponent {
}
