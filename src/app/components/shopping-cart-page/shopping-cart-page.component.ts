import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
    selector: 'app-shopping-cart-page',
    standalone: true,
    templateUrl: './shopping-cart-page.component.html',
    styleUrl: './shopping-cart-page.component.css',
    imports: [MenuBarComponent]
})
export class ShoppingCartPageComponent {

}
