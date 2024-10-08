import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home/home.routes").then(m => m.homeRoutes),
  },
  {
    path: "register",
    loadChildren: () => import("./modules/auth/auth.routes").then(m => m.registerRoutes),
  },
  {
    path: "login",
    loadChildren: () => import("./modules/auth/auth.routes").then(m => m.loginRoutes),
  },
];
