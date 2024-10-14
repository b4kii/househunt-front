import {Route} from "@angular/router";
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthComponent } from './auth.component';

export const authRoutes: Route[] = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
    ]
  }
];
