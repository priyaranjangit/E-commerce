import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Directive({
  selector: '[rollingAnimation]'
})
export class RollingAnimationDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('@rollInOut') public rollInOut = true;

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.width') width = '100%';

  @HostBinding('@rollInOut')
  get rollInTransition() {
    return {
      value: true,
      params: {
        duration: '2s'
      }
    };
  }
}
