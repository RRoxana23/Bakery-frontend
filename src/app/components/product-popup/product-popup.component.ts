import {Component, Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatCardModule, MatIconModule],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.css'
})
export class ProductPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product, category: string }) { }

  quantity: number = 1;

  isHovered: boolean = false;

  increaseQuantity(): void {
    ++this.quantity;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      --this.quantity;
    }
  }

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
}
