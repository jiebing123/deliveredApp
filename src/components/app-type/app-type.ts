import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-type',
  templateUrl: 'app-type.html'
})
export class AppTypeComponent {
  selectMenu;
  @Input() start:boolean=false;
  @Input() chkType='order';
  isAnimated:boolean;
  type;
  @Output() onFinish=new EventEmitter();
  menuList=0;
  orderList=[];
  moreChkList=[];
  selectList='';

  constructor(public navCtrl: NavController) {
    this.isAnimated=this.start;
    this.orderList=[{id:0,orderName:'综合排序'},{id:1,orderName:'好评优先'},{id:2,orderName:'销量最高'},
    {id:3,orderName:'起送价最低'},{id:4,orderName:'配送最快'},{id:5,orderName:'配送费最低'},
    {id:6,orderName:'人均从低到高'},{id:7,orderName:'人均从高到低'}];
  }

  ngOnChanges(changes:OnChanges){
    if(changes['start']){
      this.isAnimated=this.start;
    }

    if(changes['chkType']){
      this.type=this.chkType;
    }
  }

  btn_orders(order){
    this.menuList=order.id;
    this.onFinish.next();
  }

  moreChk(type){
    this.moreChkList.push(type);
  }

  btnDetail(){
    this.onFinish.next();
  }

  cancel(){
    this.moreChkList=[];
    this.selectList='';
  }

  close(){
    this.onFinish.next();
  }

  ngOnDestroy(){
    this.onFinish.complete();
  }
}
