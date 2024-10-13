import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hh-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
}
