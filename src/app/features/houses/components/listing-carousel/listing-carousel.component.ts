import { Component, OnInit } from '@angular/core';
// import { Product } from '@domain/product';
// import { ProductService } from '@service/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';

type Product = {
  id: string;
  code: string;
  name: string
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
};

@Component({
  selector: "hh-listing-carousel",
  templateUrl: "./listing-carousel.component.html",
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, DividerModule],
  // providers: [ProductService]
})
export class CarouselNumScrollDemo implements OnInit {
  // products: Product[] | undefined;

  products: Product[] = [
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      description: "Stylish black watch with a leather strap.",
      image: "bamboo-watch.jpg",
      price: 72,
      category: "Accessories",
      quantity: 18,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Watch",
      description: "Elegant blue watch for casual wear.",
      image: "bamboo-watch.jpg",
      price: 80,
      category: "Accessories",
      quantity: 30,
      inventoryStatus: "LOWSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Red Watch",
      description: "Bright red watch to complement any style.",
      image: "bamboo-watch.jpg",
      price: 60,
      category: "Accessories",
      quantity: 15,
      inventoryStatus: "OUTOFSTOCK",
      rating: 3,
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "Green Watch",
      description: "Eco-friendly green watch with bamboo accents.",
      image: "bamboo-watch.jpg",
      price: 68,
      category: "Accessories",
      quantity: 22,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      id: "1005",
      code: "h456wer53",
      name: "Green Watch",
      description: "Eco-friendly green watch with bamboo accents.",
      image: "bamboo-watch.jpg",
      price: 68,
      category: "Accessories",
      quantity: 22,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      id: "1006",
      code: "h456wer53",
      name: "Green Watch",
      description: "Eco-friendly green watch with bamboo accents.",
      image: "bamboo-watch.jpg",
      price: 68,
      category: "Accessories",
      quantity: 22,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
  ];

  responsiveOptions: any[] | undefined;

  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //     this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warn';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }
}
