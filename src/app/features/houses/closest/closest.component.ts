import { Component } from '@angular/core';
import { CarouselNumScrollDemo } from '../components/listing-carousel/listing-carousel.component';

@Component({
  selector: "hh-houses-closest",
  standalone: true,
  imports: [CarouselNumScrollDemo],
  templateUrl: "./ui/closest.component.html",
})
export class HousesClosestComponent {}
