import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: "",
  //   loadChildren: () => import("./features/houses/houses.routes").then(m => m.homeRoute),
  // },
  // {
  //   path: "register",
  //   loadChildren: () => import("./features/auth/auth.routes").then(m => m.registerRoute),
  // },
  // {
  //   path: "login",
  //   loadChildren: () => import("./features/auth/auth.routes").then(m => m.loginRoute),
  // }

  {
    path: "",
    loadChildren: () => import("./features/houses/houses.routes").then(m => m.homeRoute),
  },
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.routes").then(m => m.authRoutes),
  },
];
