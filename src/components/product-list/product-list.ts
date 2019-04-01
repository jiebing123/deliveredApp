import { Component, Input, ViewChild, OnChanges, Output, EventEmitter, NgZone } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

    @Input() type=0;
    @Input() removeId=0;
    @Input() removeNum=0;
    productList;
    @ViewChild(Content) content:Content;
    flag:boolean=false;
    @Output() isScroll = new EventEmitter<string>();
    @Output() outer = new EventEmitter<any>();

    constructor(public zone:NgZone) {
        this.productList=[{id:1,imgLogo:'logo_03.png',proName:'超级披萨（10英寸）',proDesc:'烟肉、火腿、美式香肠片、烤肠蘑菇',proSell:'月售147 &nbsp; 好评率100%',prodisc:'5折',price:68,realPrice:34,sum:10,selling:0},
        {id:2,imgLogo:'logo_03.png',proName:'超级披萨1（10英寸）',proDesc:'烟肉、火腿、美式香肠片、烤肠蘑菇',proSell:'月售147 &nbsp; 好评率100%',prodisc:'5折',price:68,realPrice:34,sum:10,selling:0},
        {id:3,imgLogo:'logo_03.png',proName:'超级披萨2（10英寸）',proDesc:'烟肉、火腿、美式香肠片、烤肠蘑菇',proSell:'月售147 &nbsp; 好评率100%',prodisc:'5折',price:68,realPrice:34,sum:10,selling:0},
        {id:4,imgLogo:'logo_03.png',proName:'超级披萨3（10英寸）',proDesc:'烟肉、火腿、美式香肠片、烤肠蘑菇',proSell:'月售147 &nbsp; 好评率100%',prodisc:'5折',price:68,realPrice:34,sum:10,selling:0}];
    }

    ngOnChanges(changes:OnChanges){
        if(changes['type']){
            console.log(this.type)
            if(this.type!=0 || (this.type==0 && this.flag)){
                var el=document.getElementById(''+this.type);
                this.content.scrollTo(0,el.offsetTop,200);
                //el.scrollIntoView(true);
                this.flag=true;
            }
        }

        if(changes['removeNum']){
            this.numOnChange();
        }
        if(changes['removeId']){
            this.numOnChange();
        }
    }

    numOnChange(){
        let that=this;
        if(this.removeId>0){
            this.productList.map((list,i)=>{
                if(list.id==that.removeId){
                    this.productList[i].selling=that.removeNum;
                }
            })
        }else{
            for(var i=0;i<this.productList.length;i++){
                this.productList[i].selling=0;
            }
        }
    }

    scrollFun(e){
        if(e.directionY=='down' && e.scrollTop >=10){
            this.isScroll.emit('down');
        }else if(e.directionY=='up' && e.scrollTop <=0){
            this.isScroll.emit('up');
        }
    }

    countNum(num,proArr){
        this.productList.map((list,i)=>{
            if(list.id==proArr.id){
                list.selling=num.num;
            }
        })

        let list={id:proArr.id,name:proArr.proName,price:proArr.price,realPrice:proArr.realPrice,num:num.num,numOps:num.ops};
        this.outer.emit(list);
    }

}
