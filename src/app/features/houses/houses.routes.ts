import {Route} from "@angular/router";
import {MainComponent} from './main/main.component';
import {HousesClosestComponent} from './closest/closest.component';
import {HousesNewestComponent} from './newest/newest.component';

export const homeRoute: Route[] = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "closest",
        component: HousesClosestComponent
      },
      {
        path: "newest",
        component: HousesNewestComponent
      },
    ]
  },
];
