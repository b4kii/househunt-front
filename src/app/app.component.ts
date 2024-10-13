import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoirThemePreset } from './config/primeng/noir-theme-preset';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'House Hunt';

  public primengConfig: PrimeNGConfig = inject(PrimeNGConfig);

  constructor() {
    this.primengConfig.theme.set({
      preset: NoirThemePreset,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    });
  }
}
