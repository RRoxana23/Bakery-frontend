import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}
