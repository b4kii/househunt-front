import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Select } from 'primeng/select';

type City = {
  name: string;
  code: string;
}

@Component({
  selector: "hh-select-input",
  standalone: true,
  imports: [FormsModule, Select],
  template: `
      <p-select
        [options]="cities"
        [(ngModel)]="selectedCity"
        optionLabel="name"
        placeholder="Select a City"
        class="w-[10rem]"
      />
  `,
})
export class SelectComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];
  }
}
