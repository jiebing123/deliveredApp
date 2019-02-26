import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'notice-list'
})
@Component({
  selector: 'page-notice-list',
  templateUrl: 'notice-list.html',
})
export class NoticeListPage {

  header_title;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.header_title=navParams.get('name') || '订单通知';
    if(this.header_title=='订单通知'){
    }else{

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeListPage');
  }

}
