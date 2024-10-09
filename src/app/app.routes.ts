import { Routes } from '@angular/router';
import {AuthLayoutComponent} from './layout/auth/auth-layout.component';
import {MainLayoutComponent} from './layout/main/main-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/home/home.routes").then(m => m.homeRoute),
      },
    ]
  },
  {
    path: "register",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/auth/auth.routes").then(m => m.registerRoute),
      },
    ]
  },
  {
    path: "login",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/auth/auth.routes").then(m => m.loginRoute),
      },
    ]
  }
];
