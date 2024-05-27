import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private el: ElementRef) {
  }

  @Input('appHighlight') highlightColor: string | null | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#efefef');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
