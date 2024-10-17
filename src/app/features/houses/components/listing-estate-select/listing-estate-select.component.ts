import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ListingEstate } from '../../../../shared/types/filters.types';

@Component({
  selector: "hh-listing-estate-select",
  standalone: true,
  imports: [FormsModule, Select, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="filtersForm">
      <p-select
        [options]="estates"
        [selectOnFocus]="true"
        optionLabel="name"
        class="w-[10rem]"
        formControlName="estate"
      />
    </ng-container>
  `,
})
export class ListingEstateSelectComponent implements OnInit{
  protected estates: ListingEstate[] | undefined;
  @Input() filtersForm!: FormGroup;

  ngOnInit() {
    this.estates = [
      { id: 1, name: "Pokój" },
      { id: 2, name: "Mieszkanie" },
      { id: 3, name: "Kawalerka" },
      { id: 4, name: "Dom" },
    ];

    this.filtersForm.patchValue({
      estate: this.estates[0]
    })
  }
}
