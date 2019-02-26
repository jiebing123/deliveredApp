import { Component, Input, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

    @Input() type=0;
    @ViewChild(Content) content:Content;
    flag:boolean=false;
    @Output() isScroll = new EventEmitter<string>();
    @Output() private outer = new EventEmitter<any>();

    constructor() {

    }

    ngOnChanges(changes:OnChanges){
        if(changes['type']){
            if(this.type!=0 || (this.type==0 && this.flag)){
                var el=document.getElementById(''+this.type);
                console.log(el.offsetTop)
                this.content.scrollTo(0,el.offsetTop,200);
                //el.scrollIntoView(true);
                this.flag=true;
            }
        }
    }

    scrollFun(e){
        console.log('e:',e)
        if(e.directionY=='down' && e.scrollTop >=10){
            this.isScroll.emit('down');
        }else if(e.directionY=='up' && e.scrollTop <=0){
            this.isScroll.emit('up');
        }
    }

    countNum(num,name,price){
        let list={name:name,price:price,num:num};
        this.outer.emit(list);
    }

}
