import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: "",
//     component: MainLayoutComponent,
//     children: [
//       {
//         path: "",
//         loadChildren: () => import("./features/home/home.routes").then(m => m.homeRoute),
//       },
//     ]
//   },
//   {
//     path: "register",
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: "",
//         loadChildren: () => import("./features/auth/auth.routes").then(m => m.registerRoute),
//       },
//     ]
//   },
//   {
//     path: "login",
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: "",
//         loadChildren: () => import("./features/auth/auth.routes").then(m => m.loginRoute),
//       },
//     ]
//   }
// ];

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/houses/houses.routes").then(m => m.homeRoute),
  },
  {
    path: "register",
    loadChildren: () => import("./features/auth/auth.routes").then(m => m.registerRoute),
  },
  {
    path: "login",
    loadChildren: () => import("./features/auth/auth.routes").then(m => m.loginRoute),
  }
];
