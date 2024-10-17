import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';

import {  RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { ListingEstateSelectComponent } from '../listing-estate-select/listing-estate-select.component';
import { ListingTransactionSelectComponent } from '../listing-transaction-select/listing-transaction-select.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: "hh-listing-filters",
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ButtonModule,
    ReactiveFormsModule,
    ListingEstateSelectComponent,
    ListingTransactionSelectComponent,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputNumberModule,
    FieldsetModule,
    FloatLabelModule,
  ],
  template: `
    <div>
      <form [formGroup]="filtersForm" (ngSubmit)="onSubmit()">
        <hh-listing-estate-select [filtersForm]="filtersForm" />
        <hh-listing-transaction-select [filtersForm]="filtersForm" />
        <input
          pInputText
          type="text"
          placeholder="Lokalizacja"
          formControlName="localization" />
<!--        TODO: Extract this to separate components maybe-->
        <div class="flex gap-10">
          <p-fieldset legend="Cena">
            <div class="flex gap-4 py-4">
              <p-floatlabel>
                <p-inputNumber id="priceMin" formControlName="priceMin" suffix=" zł" />
                <label for="priceMin">od</label>
              </p-floatlabel>
              <p-floatlabel>
                <p-inputNumber id="priceMax" formControlName="priceMax" suffix=" zł" />
                <label for="priceMax">do</label>
              </p-floatlabel>
            </div>
          </p-fieldset>
          <p-fieldset legend="Powierzchnia">
            <div class="flex gap-4 py-4">
              <p-floatlabel>
                <p-inputNumber id="areaMin" formControlName="areaMin" suffix=" m2" />
                <label for="areaMin">od</label>
              </p-floatlabel>
              <p-floatlabel>
                <p-inputNumber id="areaMax" formControlName="areaMax" suffix=" m2" />
                <label for="areaMax">do</label>
              </p-floatlabel>
            </div>
          </p-fieldset>
        </div>
        <button pButton><i class="pi pi-search"></i>Wyszukaj</button>
      </form>
    </div>
  `,
})
export class FiltersComponent {
  protected filtersForm = new FormGroup({
    estate: new FormControl(""),
    transaction: new FormControl(""),
    localization: new FormControl(""),
    priceMin: new FormControl(""),
    priceMax: new FormControl(""),
    areaMin: new FormControl(""),
    areaMax: new FormControl(""),
  });

  protected onSubmit() {
    console.log(this.filtersForm.getRawValue());
  }
}
