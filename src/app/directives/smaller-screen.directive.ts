import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmallerScreen]',
  standalone: true
})
export class SmallerScreenDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    const menuSmallerScreen: boolean = window.innerWidth <= 1100;
    const cartSmallerScreen: boolean = window.innerWidth <= 700;
    if (menuSmallerScreen) {
      this.renderer.addClass(this.el.nativeElement, 'menu-smallerScreen');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'menu-smallerScreen');
    }

    if (cartSmallerScreen) {
      this.renderer.addClass(this.el.nativeElement, 'cart-smaller-screen');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'cart-smaller-screen');
    }
  }
}
