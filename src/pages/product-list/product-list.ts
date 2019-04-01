import { Component, ViewChild, ElementRef, NgZone, Renderer2 } from '@angular/core';
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
    cartList=[];
    @ViewChild('btn_cart') btn_cart:ElementRef;
    btn_order='';
    orderFirstTxt='¥30起送';
    priceTxt='';
    priceFirstTxt='未选购商品';
    realSum=0;
    sum=0;
    isShowCart:boolean=false;
    removeId=0;
    removeNum=0;

    constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,private renderer:Renderer2) {
        this.cartList=[];
        this.priceTxt=this.priceFirstTxt;
        this.btn_order=this.orderFirstTxt;
    }

    ngOnInit():void{
        this.subsctibeScoll=Observable.fromEvent(window,'scroll').debounceTime(50).subscribe((event)=>{
            console.log('scroll')
        })

        this.subscription=this.productList.isScroll.subscribe(isScroll => {
            
            if(this.content.contentTop>=140){
                this.renderer.setStyle(this.row_tabs,'position','fixed');
            }
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
      //console.log(e);
    }

    addCart(productList){
        let index:number=-1;
        this.removeId=productList.id;
        this.removeNum=productList.num;

        if(this.cartList.length>0){
            this.cartList.map((arr,i)=>{
                if(arr.id==productList.id){
                    index=i;
                    return i;
                }
            })
        }
        
        if(index<0 || this.cartList.length<=0){
            this.cartList.push(productList);
        }else{
            if(productList.num>0){
                this.cartList[index].num=productList.num;
            }else{
                this.cartList.splice(index,1);
            }
        }

        this.costTotal(productList.numOps,productList.realPrice,productList.price);
    }

    cart_click(){
        if(this.cartList.length>0){
            this.isShowCart=true;
        }
    }

    countNum(num,id){
        var index;
        this.cartList.map((arr,i)=>{
            if(arr.id==id){
                index=i;
                return i;
            }
        })
        
        this.costTotal(num.ops,this.cartList[index].realPrice,this.cartList[index].price);

        if(num.num<=0){
            this.cartList.splice(index,1);
            if(this.cartList.length<=0){
                this.btn_clear();
            }
        }else{
            this.cartList[index].num=num.num;
            this.removeId=id;
            this.removeNum=num.num;
        }
    }

    costTotal(ops,realPrice,price){
        if(ops=='add'){
            this.realSum+=realPrice;
            this.sum+=price;
        }else{
            this.realSum-=realPrice;
            this.sum-=price;
        }
        this.priceTxt='<span class="white_font">¥'+this.realSum+'</span>&nbsp;<s class="price_desc">¥'+this.sum+'</s>';
        this.renderer.addClass(this.btn_cart.nativeElement,'blue_bg');
        this.btn_order='去结算';
    }

    btn_clear(){
        this.priceTxt=this.priceFirstTxt;
        this.btn_order=this.orderFirstTxt;
        this.realSum=0;
        this.sum=0;
        this.cartList=[];
        this.removeId=0;
        this.removeNum=-1;
        this.renderer.removeClass(this.btn_cart.nativeElement,'blue_bg');
        this.isShowCart=false;
    }
    

}
