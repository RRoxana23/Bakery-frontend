import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { ProductsConstants } from '../../constants/products-constants';
import { ProductComponent } from "../product/product.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FollowUsComponent } from "../follow-us/follow-us.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
    selector: 'app-menu-page',
    standalone: true,
    templateUrl: './menu-page.component.html',
    styleUrl: './menu-page.component.css',
    imports: [MenuBarComponent, ProductComponent, MatCardModule, MatButtonModule, FollowUsComponent, MatFormFieldModule, MatSelectModule, MatPaginatorModule]
})
export class MenuPageComponent implements OnInit, OnDestroy{

  private slideInterval1: any;
  private slideInterval2: any;
  private slideInterval3: any;

  products = ProductsConstants.PRODUCTS;

  ngOnInit(): void {
    this.carousel1();
    this.carousel2();
    this.carousel3(); 
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval1);
    clearInterval(this.slideInterval2);
    clearInterval(this.slideInterval3);
  }

  private carousel1(): void {
    const slides = document.querySelectorAll('.left-container .mySlides');
    let slideIndex = 0;

    const slideShow = () => {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = 'none';
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      (slides[slideIndex - 1] as HTMLElement).style.display = 'block';
    };

    this.slideInterval1 = setInterval(slideShow, 2000);
  }

  private carousel2(): void {
    const slides = document.querySelectorAll('.right-container .products-container:nth-child(1) .mySlides');
    let slideIndex = 0;

    const slideShow = () => {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = 'none';
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      (slides[slideIndex - 1] as HTMLElement).style.display = 'block';
    };

    this.slideInterval2 = setInterval(slideShow, 2000);
  }

  private carousel3(): void {
    const slides = document.querySelectorAll('.right-container .products-container:nth-child(2) .mySlides');
    let slideIndex = 0;

    const slideShow = () => {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = 'none';
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      (slides[slideIndex - 1] as HTMLElement).style.display = 'block';
    };

    this.slideInterval3 = setInterval(slideShow, 2000);
  }
}