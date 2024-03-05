import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityControlService {

  constructor() { }

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
