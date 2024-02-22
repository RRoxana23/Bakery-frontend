import { Component} from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [MenuBarComponent, DropdownModule, CommonModule, FormsModule],
  templateUrl: './locations-page.component.html',
  styleUrl: './locations-page.component.css'
})
export class LocationsPageComponent{
  
  selectedCity: any = [];
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
}
