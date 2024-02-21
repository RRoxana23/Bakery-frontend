import { Product } from "../interfaces/product";

export class PastryConstants {
    
  public static PASTRY: Product[] = [ 

    {
      id: 1,
      title: "Croissant",
      description: "A classic French pastry made of buttery, flaky dough.",
      ingredients: "Flour, butter, yeast, sugar, salt",
      image: "./assets/pastry/croissant.jpg",
      price: 1.49
    },
    {
      id: 2,
      title: "Chocolate Cake",
      description: "A decadent dessert made with layers of rich chocolate sponge cake and creamy chocolate ganache.",
      ingredients: "Flour, sugar, cocoa powder, butter, eggs, milk, baking powder, vanilla extract",
      image: "./assets/pastry/cake.jpg",
      price: 17.99
    },
    {
      id: 3,
      title: "Bread",
      description: "Freshly baked artisan bread with a crisp crust and soft interior.",
      ingredients: "Flour, water, salt, yeast",
      image: "./assets/pastry/bread.jpg",
      price: 1.99
    },
    {
      id: 4,
      title: "Eclair",
      description: "A delightful French pastry filled with creamy custard and topped with chocolate icing.",
      ingredients: "Flour, butter, eggs, milk, sugar, vanilla, chocolate",
      image: "./assets/pastry/eclair.jpg",
      price: 2.99
    },
    {
      id: 5,
      title: "Blueberry Muffin",
      description: "Moist muffins bursting with fresh blueberries and a hint of vanilla.",
      ingredients: "Flour, sugar, butter, eggs, milk, baking powder, vanilla extract, blueberries",
      image: "./assets/pastry/muffin.jpg",
      price: 1.79
    },
    {
      id: 6,
      title: "Cheesecake",
      description: "Creamy cheesecake with a buttery graham cracker crust, topped with fresh fruit.",
      ingredients: "Cream cheese, sugar, eggs, sour cream, vanilla extract, graham crackers, butter",
      image: "./assets/pastry/cheesecake.jpg",
      price: 2.89
    },
    {
      id: 7,
      title: "Donut",
      description: "Soft and fluffy donuts with a sweet glaze, perfect for breakfast or a snack.",
      ingredients: "Flour, sugar, yeast, milk, eggs, butter, vanilla extract",
      image: "./assets/pastry/donut.jpg",
      price: 1.89
    },
    {
      id: 8,
      title: "Tiramisu",
      description: "An Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone cheese.",
      ingredients: "Ladyfingers, espresso coffee, mascarpone cheese, eggs, sugar, cocoa powder",
      image: "./assets/pastry/tiramisu.jpg",
      price: 5.99
    },
    {
      id: 9,
      title: "Greek Cheese Pie",
      description: "A savory pie filled with feta cheese and fresh herbs, wrapped in flaky phyllo pastry.",
      ingredients: "Phyllo dough, feta cheese, eggs, milk, olive oil, parsley, dill",
      image: "./assets/pastry/cheese-pie.jpg",
      price: 2.69
    }
  ]
}