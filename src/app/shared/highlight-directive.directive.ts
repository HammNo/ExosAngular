import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private elem : ElementRef){
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('chartreuse');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  highlight(color : string){
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
