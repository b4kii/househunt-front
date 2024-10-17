import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from "primeng/select";
import { ListingTransaction } from "../../../../shared/types/filters.types";

@Component({
  selector: "hh-listing-transaction-select",
  standalone: true,
  imports: [FormsModule, Select, ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="filtersForm">
      <p-select
        [options]="transactions"
        [selectOnFocus]="true"
        optionLabel="name"
        class="w-[10rem]"
        formControlName="transaction"
      />
    </ng-container>
  `,
})
export class ListingTransactionSelectComponent implements OnInit {
  protected transactions: ListingTransaction[] | undefined;
  @Input() filtersForm!: FormGroup;

  ngOnInit() {
    this.transactions = [
      { id: 1, name: "Na wynajem",},
      { id: 2, name: "Na sprzedaż"},
    ];

    this.filtersForm.patchValue({
      transaction: this.transactions[0]
    })
  }
}
