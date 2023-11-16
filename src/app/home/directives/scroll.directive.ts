import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private scrollPixels: number = 70;
  private elementId: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
    this.elementId   = this.htmlElement.nativeElement.className;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if( !this.htmlElement ) return;
    
    if (window.scrollY <= this.scrollPixels) {
      switch (this.elementId) {
        case 'header_top':
          this.htmlElement.nativeElement.style.opacity = '0';
          break;
        case 'header_bottom':
          this.htmlElement.nativeElement.style.top = '0';
          break;
        case 'navbar navbar-expand-lg custom_nav-container':
          this.htmlElement.nativeElement.style.height = '25px';
          break;
      }
    }
    if (window.scrollY === 0) {
      switch (this.elementId) {
        case 'header_top':
          this.htmlElement.nativeElement.style.opacity = '1';
          break;
        case 'header_bottom':
          this.htmlElement.nativeElement.style.top = 'auto';
          break;
        case 'navbar navbar-expand-lg custom_nav-container':
          this.htmlElement.nativeElement.style.height = '69px';
          break;
      }
    }
  }


}
