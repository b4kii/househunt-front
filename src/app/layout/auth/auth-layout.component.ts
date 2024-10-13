import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'hh-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-screen flex justify-center items-center mx-auto">
      <div class="flex flex-col justify-center items-center gap-[128px]">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class AuthLayoutComponent {
}
