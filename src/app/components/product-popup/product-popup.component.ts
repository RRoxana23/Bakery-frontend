import {Component, Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { QuntityControlComponent } from '../quantity-control/quantity-control.component';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatCardModule, MatIconModule, QuntityControlComponent],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.css'
})
export class ProductPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product, category: string }) { }

  isHovered: boolean = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
}
