import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  standalone: true,
  imports: [],
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.css'
})
export class QuntityControlComponent {

  quantity: number = 1;

  increaseQuantity(): void {
    ++this.quantity;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      --this.quantity;
    }
  }
}
