import { Component } from '@angular/core';
import { OnScrollDirective } from '../directives/on-scroll.directive';
import { PageContent } from '../interfaces/page-content';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [OnScrollDirective],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {
  constructor() {}

  pageContent: PageContent = {
    leftPhoto: './assets/page-content-img.jpg',
    rightPhoto: './assets/christmas-pic.png',
    title: 'From our warm and crusty bread to our delightful pastries, each bite tells a story of craftsmanship and dedication.',
    description: 'Explore our diverse selection, savor the aromas, and experience the joy of a bakery that takes pride in delivering the finest baked goods to your table. At Baker\'s Haven, we blend the perfect ingredients to create moments of pure delight. Join us on this culinary journey, where every visit is a celebration of flavor and freshness.'
  };
}