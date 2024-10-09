import {Route} from "@angular/router";
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';

export const registerRoute: Route[] = [
  {
    path: "",
    component: RegisterComponent
  },
];

export const loginRoute: Route[] = [
  {
    path: "",
    component: LoginComponent
  },
];
