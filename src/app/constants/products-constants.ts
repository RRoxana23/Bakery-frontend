import { Product } from "../interfaces/product";

export class ProductsConstants {
    
  public static PRODUCTS: Product[] = [ 

    {
      id: 1,
      title: "Croissant",
      image: "./assets/croissant.jpg",
      price: 1.49
    },
    {
      id: 2,
      title: "Chocolate cake",
      image: "./assets/cake.jpg",
      price: 17.99
    },
    {
      id: 3,
      title: "Bread",
      image: "./assets/bread.jpg",
      price: 1.99
    },
    {
      id: 4,
      title: "Eclair",
      image: "./assets/eclair.jpg",
      price: 2.99
    },
    {
      id: 5,
      title: "Blueberry Muffin",
      image: "./assets/muffin.jpg",
      price: 1.79
    },
    {
      id: 6,
      title: "Cheesecake",
      image: "./assets/cheesecake.jpg",
      price: 2.89
    },
    {
      id: 7,
      title: "Donut",
      image: "./assets/donut.jpg",
      price: 1.89
    },
    {
      id: 8,
      title: "Tiramisu",
      image: "./assets/tiramisu.jpg",
      price: 5.99
    },
    {
      id: 9,
      title: "Greek cheese pie",
      image: "./assets/cheese-pie.jpg",
      price: 2.69
    }
  ]
}