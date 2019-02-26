import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';
import { ElementDef } from '@angular/core/src/view';

@IonicPage({
    name:'product-list'
})

@Component({
    selector: 'page-product-list',
    templateUrl: 'product-list.html',
})
export class ProductListPage {

    @ViewChild(Content) content:Content;
    @ViewChild(Slides) slides:Slides; 
    slidesIndex:number=0;
    subsctibeScoll:any;
    product_type=0;
    @ViewChild('productList') productList;
    subscription:Subscription;
    observable:Observable<any>;
    @ViewChild('row_tabs') row_tabs:ElementRef;
    tabScroll:boolean=false;
    cartList:[any];

    constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone) {
    }

    ngOnInit():void{
        this.subsctibeScoll=Observable.fromEvent(window,'scroll').debounceTime(50).subscribe((event)=>{
            console.log('scroll')
        })

        this.subscription=this.productList.isScroll.subscribe(isScroll => {
            if(isScroll=='down'){
                if(!this.tabScroll){
                    var top=this.row_tabs.nativeElement.offsetTop;
                    this.content.scrollTo(0,top,200);
                    this.zone.run(()=>{
                        this.tabScroll=true;
                    })
                }
            }else if(isScroll=='up'){
                this.zone.run(()=>{
                    this.tabScroll=false;
                })
            }
        })
        

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductListPage');
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    slideChange(){
        this.slidesIndex=this.slides.getActiveIndex();
        if(this.slidesIndex>=this.slides.length()){
          this.slidesIndex=this.slides.length() - 1;
        }
    }

    sel_slide(index){
        this.slides.slideTo(index);
    }

    onScroll(e){
      console.log(e);
    }

    addCart(productList){
        console.log(productList)
        this.cartList.push(productList);
    }
    

}
