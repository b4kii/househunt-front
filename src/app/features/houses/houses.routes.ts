import {Route} from "@angular/router";
import {MainComponent} from './main/main.component';
import {HousesClosestComponent} from './houses-closest/houses-closest.component';
import {HousesNewestComponent} from './houses-newest/houses-newest.component';

export const homeRoute: Route[] = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "houses-closest",
        component: HousesClosestComponent
      },
      {
        path: "houses-newest",
        component: HousesNewestComponent
      },

    ]
  },
];
