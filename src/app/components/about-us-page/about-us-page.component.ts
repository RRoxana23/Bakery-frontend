import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { PageContent } from '../../interfaces/page-content';
import { PageContentComponent } from "../page-content/page-content.component";

@Component({
    selector: 'app-about-us-page',
    standalone: true,
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.css',
    imports: [MenuBarComponent, PageContentComponent]
})
export class AboutUsPageComponent {

  constructor(){}

  aboutUs: PageContent = {
    leftPhoto: './assets/founders.jpg',
    title: 'Meet our founders!'
  };
}
