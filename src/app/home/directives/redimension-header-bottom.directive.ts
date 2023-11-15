import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[redimensionHeaderBottom]'
})
export class RedimensionHeaderBottomDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private scrollPixels: number = 70;
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if( !this.htmlElement ) return;
    if (window.scrollY <= this.scrollPixels) {
      this.htmlElement.nativeElement.style.top = '0'
    }
    if (window.scrollY === 0) {
      this.htmlElement.nativeElement.style.top = 'auto';
    }
  }

}
