import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmallerScreen]',
  standalone: true
})
export class SmallerScreenDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    const smallerScreen: boolean = window.innerWidth <= 1100;
    if (smallerScreen) {
      this.renderer.addClass(this.el.nativeElement, 'smallerScreen');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'smallerScreen');
    }
  }
}
