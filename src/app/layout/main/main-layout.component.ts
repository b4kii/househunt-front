import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'hh-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
}
