import { Product } from "../interfaces/product";

export class CoffeesConstants {
    
  public static COFFEES: Product[] = [ 

    {
      id: 1,
      title: "Crème Caramel",
      description: "A delicious caramel coated vanilla latte topped with whipped cream. The perfect mix of sweet and rich.",
      ingredients: "Espresso, milk, caramel syrup, whipped cream",
      image: "./assets/coffees/creme-caramel.jpg",
      imagePopup: "./assets/coffees-popup/creme-caramel-popup.jpg",
      price: 5.49
    },
    {
      id: 2,
      title: "Dirty",
      description: "A strong espresso drink mixed with a luxurious chocolate sauce and a shot of Irish cream liqueur.",
      ingredients: "Espresso, Irish cream liqueur",
      image: "./assets/coffees/dirty.jpg",
      imagePopup: "./assets/coffees-popup/dirty-popup.jpg",
      price: 5.99
    },
    {
      id: 3,
      title: "French Vietnamese",
      description: "A sweet and creamy coffee beverage with condensed milk, inspired by Vietnamese café culture. It’s an Asian finish to a French coffee.",
      ingredients: "Espresso, condensed milk, ice",
      image: "./assets/coffees/french-vietnamese.jpg",
      imagePopup: "./assets/coffees-popup/french-vietnamese-popup.jpg",
      price: 5.19
    },
    {
      id: 4,
      title: "Mocha",
      description: "A classic coffee drink made with espresso, chocolate syrup, and steamed milk.",
      ingredients: "Espresso, chocolate syrup, milk",
      image: "./assets/coffees/mocha.jpg",
      imagePopup: "./assets/coffees-popup/mocha-popup.jpg",
      price: 4.99
    },
    {
      id: 5,
      title: "Cold Brew Latte",
      description: "Smooth and refreshing cold brew coffee mixed with creamy milk.",
      ingredients: "Cold brew coffee, milk, ice",
      image: "./assets/coffees/cold-brew-latte.jpg",
      imagePopup: "./assets/coffees-popup/cold-brew-popup.jpg",
      price: 3.89
    },
    {
      id: 6,
      title: "Cappuccino",
      description: "A classic Italian coffee drink with equal parts espresso, steamed milk, and foam.",
      ingredients: "Espresso, milk, foam",
      image: "./assets/coffees/capuccino.jpg",
      imagePopup: "./assets/coffees-popup/capuccino-popup.jpg",
      price: 2.99
    },
    {
      id: 7,
      title: "Espresso Frappuccino",
      description: "A blended frozen drink made with espresso, milk, and ice, topped with whipped cream.",
      ingredients: "Espresso, milk, ice, whipped cream",
      image: "./assets/coffees/espresso.jpg",
      imagePopup: "./assets/coffees-popup/espresso-popup.jpg",
      price: 3.19
    },
    {
      id: 8,
      title: "Iced Matcha Latte",
      description: "A refreshing green tea latte made with matcha powder, milk, and ice.",
      ingredients: "Matcha powder, milk, ice",
      image: "./assets/coffees/matcha-latte.jpg",
      imagePopup: "./assets/coffees-popup/matcha-popup.jpg",
      price: 4.09
    }
  ]
}
