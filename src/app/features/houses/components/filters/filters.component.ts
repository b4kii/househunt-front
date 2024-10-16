import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

import {  RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { SelectComponent } from '../select/select.component';

@Component({
  selector: "hh-listing-filters",
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonModule, SelectComponent],
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {}
