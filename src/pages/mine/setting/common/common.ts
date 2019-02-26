import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'setting-common'
})

@Component({
  selector: 'page-common',
  templateUrl: 'common.html',
})
export class CommonPage {

  selectOptions;
  @ViewChild('btn_select') btn_select;
  type;
  selectArr=[];
  imgArr=['普通','高清'];
  wifiArr=['仅WI-FI网络','从无'];
  select_val;
  select_img='普通';
  select_wifi='仅WI-FI网络';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectOptions={
      //title:'自动下载最新安装包',
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonPage');
  }

  select_show(type){
    this.type=type;
    this.selectArr=[];
    if(type=='img'){
      this.selectArr=this.imgArr;
      this.select_val=this.select_img;
    }else{
      this.selectArr=this.wifiArr;
      this.select_val=this.select_wifi;
    }
    setTimeout(()=>{
      this.btn_select._elementRef.nativeElement.click();
    },200);
  }

  select_change(){
    if(this.type=='img'){
      this.select_img=this.select_val;
    }else{
      this.select_wifi=this.select_val;
    }
  }

}
