import { Component } from "@angular/core";
import { NavProfileDropdownComponent } from "./components/nav-profile-dropdown.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "hh-nav",
  standalone: true,
  imports: [NavProfileDropdownComponent, RouterLink],
  templateUrl: "./nav.component.html",
})
export class NavComponent {}
