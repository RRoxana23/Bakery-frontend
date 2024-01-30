import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[app-on-scroll]',
  standalone: true
})
export class OnScrollDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.adjustLayout();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.adjustLayout();
  }

  private adjustLayout(): void {
    const menuBarHeight = (document.querySelector('.menu-bar') as HTMLElement)?.offsetHeight || 0;
    const scrollPosition = window.scrollY;

    const leftPart = this.element.nativeElement.querySelector('.left-part');
    const rightPart = this.element.nativeElement.querySelector('.right-part');

    this.renderer.setStyle(rightPart, 'margin-left', leftPart.offsetWidth + 'px');

    if (scrollPosition < menuBarHeight) {
      this.renderer.setStyle(leftPart, 'position', 'absolute');
      this.renderer.setStyle(leftPart, 'top', menuBarHeight + 'px');
    } else {
      this.renderer.setStyle(leftPart, 'position', 'fixed');
      this.renderer.setStyle(leftPart, 'width', '35%');
      this.renderer.setStyle(leftPart, 'top', '0');
    }
  }
}
