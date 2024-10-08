import {Route} from "@angular/router";
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';

export const registerRoutes: Route[] = [
  {
    path: "",
    component: RegisterComponent
  },
];

export const loginRoutes: Route[] = [
  {
    path: "",
    component: LoginComponent
  },
];
