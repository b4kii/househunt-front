import {Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: "hh-auth-layout",
  standalone: true,
  imports: [RouterOutlet, RouterLink, DividerModule],
  template: `
    <!--    <a routerLink="/" class="absolute top-8 left-8 pi pi-home text-2xl"></a>-->
    <div class="flex flex-col items-center">
      <ng-content></ng-content>
    </div>
  `,
})
export class AuthLayoutComponent {}
