import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { PageContent } from '../interfaces/page-content';
import { PageContentComponent } from "../page-content/page-content.component";
import { FollowUsComponent } from "../follow-us/follow-us.component";

@Component({
    selector: 'app-about-us-page',
    standalone: true,
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.css',
    imports: [MenuBarComponent, PageContentComponent, FollowUsComponent]
})
export class AboutUsPageComponent {

  constructor(){}

  aboutUs: PageContent = {
    leftPhoto: './assets/founders.jpg',
    title: 'Meet our founders!',
    description: 'In the heart of San Francisco, Emily Turner and Nathan Brooks found themselves caught in a whirlwind of tantalizing aromas and the hustle and bustle of their favorite neighborhood. Drawn by the sweet scent of freshly baked pastries and the rich aroma of freshly ground coffee, they couldn\'t help but stop at a vibrant storefront, bursting with delightful treats.'
  };
}
