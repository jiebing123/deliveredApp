import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:'[onScroll]',
})

export class OnScrollDirective {
    @HostListener('scroll',['$event']) public onscroll = ($event) => {
        console.log('HostListener scroll')
    }
}