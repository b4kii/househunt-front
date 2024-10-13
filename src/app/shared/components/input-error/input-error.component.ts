import {Component} from '@angular/core';

@Component({
  selector: 'hh-input-error',
  standalone: true,
  template: `
    <div class="text-red-500">
      <small>
        <ng-content>
        </ng-content>
      </small>
    </div>
  `,
})
export class InputErrorComponent {
}
