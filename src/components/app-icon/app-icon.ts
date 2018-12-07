import { Component, Input, OnInit, OnChanges, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: 'app-icon.html',
  host:{
    'class':'app-icon'
  }
})
export class AppIconComponent implements OnInit,OnChanges {

  @Input('name') name:string='';

  constructor(public elementRef:ElementRef,public renderer:Renderer2) {
    
  }

  ngOnInit(){
    let ele:HTMLElement=this.elementRef.nativeElement;
    if(ele.getAttribute('aria-hidden')===null){
      ele.setAttribute('aria-hidden','true');
    }
  }

  ngOnChanges(changes:SimpleChanges){
    let nameChange = changes['name'];
    if(nameChange){
      if(nameChange.previousValue) this.renderer.removeClass(this.elementRef.nativeElement,'app-'+nameChange.previousValue);
      this.renderer.addClass(this.elementRef.nativeElement,'app-'+this.name);
    }
  }

}
