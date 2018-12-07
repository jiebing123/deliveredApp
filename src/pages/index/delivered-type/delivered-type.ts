import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name:'delivered-type'
})

@Component({
  selector: 'page-delivered-type',
  templateUrl: 'delivered-type.html',
})
export class DeliveredTypePage {

  type;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.type=navParams.get('type');
  }

  ionViewDidLoad() {
    
  }

  btn_type(type){
    if(type=='check'){
      if(type!=this.type){
        this.type=type;
      }else{
        this.viewCtrl.dismiss();
      }
    }else if(type=='order'){
      if(type!=this.type){
        this.type=type;
      }else{
        this.viewCtrl.dismiss();
      }
    }else{
      this.viewCtrl.dismiss();
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
