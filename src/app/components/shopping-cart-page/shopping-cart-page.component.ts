import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { PageContent } from '../../interfaces/page-content';
import { PageContentComponent } from "../page-content/page-content.component";
import { ShoppingCartProductComponent } from "../shopping-cart-product/shopping-cart-product.component";

@Component({
    selector: 'app-shopping-cart-page',
    standalone: true,
    templateUrl: './shopping-cart-page.component.html',
    styleUrl: './shopping-cart-page.component.css',
    imports: [MenuBarComponent, PageContentComponent, ShoppingCartProductComponent]
})
export class ShoppingCartPageComponent {

    shoppingCart: PageContent = {
        leftPhoto: './assets/shopping-cart-page-img.jpg',
        title: 'Shopping cart'
    };

    empty: boolean = false;
}
