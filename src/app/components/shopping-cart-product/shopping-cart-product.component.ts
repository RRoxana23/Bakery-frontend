import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { QuntityControlComponent } from '../quantity-control/quantity-control.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shopping-cart-product',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, ProductPopupComponent, MatIconModule, QuntityControlComponent],
  templateUrl: './shopping-cart-product.component.html',
  styleUrl: './shopping-cart-product.component.css'
})
export class ShoppingCartProductComponent {

  isHovered: boolean = false;

    onMouseOver() {
        this.isHovered = true;
    }

    onMouseOut() {
    this.isHovered = false;
    }
}
