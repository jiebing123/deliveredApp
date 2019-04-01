import { Directive, HostListener, ElementRef, Input, Injector } from "@angular/core";

@Directive({
    selector:'[onBlankHide]',
    inputs:['id']
})

export class OnBlankHideDirective {
    private element:ElementRef;
    @Input() hideId:string;

    constructor(injector:Injector){
        this.element=injector.get(ElementRef);
    }

    @HostListener('click',['$event'])
    onBlankHide(e) {
        console.log('onBlankHide:',e)
        e.stopPropagation();
        //if(this.element.nativeElement)
        this.element.nativeElement.querySelector('#'+this.hideId);
    }
    
}